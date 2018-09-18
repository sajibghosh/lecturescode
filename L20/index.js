import { log } from './helper';

const myPromise = new Promise((resolve, reject) => {
  let name = 'sajib ghosh';
  let len = name.length;

  let obj = {
    name,
    len
  };

  resolve(obj);
});

myPromise.then(({ name, len }) => {
  console.log(name, len);
});
