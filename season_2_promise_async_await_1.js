// Promise and Async/Await
/*
    promise states 
        pending
        resolved
        reject
*/

const { rejects } = require("assert");
const { resolve } = require("path");

const myPromise = new Promise((resolve, reject) => {
  console.log("Processing");
  setTimeout(() => resolve("succesfully resolved"), 4000);
});

myPromise
  .then((res) => console.log("res"))
  .catch((e) => console.log("Error : ", e));

const myPromise2 = new Promise((resolve, reject) => {
  console.log("Processing");
  setTimeout(() => reject("rejected"), 4000);
});

myPromise2
  .then((res) => console.log("res"))
  .catch((e) => console.log("Error : ", e));
