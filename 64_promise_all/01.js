const Promise1 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise1!");
    }, 1000);
  },
  (reject) => {}
);
const Promise2 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise2!");
    }, 2000);
  },
  (reject) => {}
);
const Promise3 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise3!");
    }, 3000);
  },
  (reject) => {}
);

Promise.all([Promise1, Promise2, Promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(`Error in promises ${error}`));
