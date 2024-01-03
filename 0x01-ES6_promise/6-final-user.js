import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((values) => {
    for (const value of values) {
      if (value.status === 'rejected') {
        value.value = `Error: ${value.reason.message}`;
        delete value.reason;
      }
    }
    return values;
  });
}
