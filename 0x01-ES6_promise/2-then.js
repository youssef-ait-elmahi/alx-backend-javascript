function getPromise() {
  return new Promise(() => {
    // Some logic here...
  });
}

function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

// Now we can use handleResponseFromAPI with the Promise returned by getPromise
const promise = getPromise();
handleResponseFromAPI(promise);
