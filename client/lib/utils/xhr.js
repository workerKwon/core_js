const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

function getUsers({ method, url, successCallback, errorCallback, body }) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.response);
        successCallback(data);
      } else {
        errorCallback({ message: 'Unknown error' });
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'John',
  age: 20,
};

getUsers({
  method: 'POST',
  url: ENDPOINT,
  successCallback: (data) => {
    console.log(data);
  },
  errorCallback: (error) => {
    console.log(error.message);
  },
  body: obj,
});
