import { log } from './helper';

const myPromise = new Promise((resolve, reject) => {
  let name = '';

  if (name) {
    resolve({
      name,
      len: name.length
    });
  } else {
    let error = new Error("Name can't be empty");
    reject(error);
  }
});

myPromise
  .then(({ name, len }) => {
    console.log(name, len);
  })

  .catch(error => console.log(error));
