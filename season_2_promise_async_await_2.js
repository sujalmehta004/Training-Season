// Async / Await
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "valid") {
        resolve("successfully fetch data");
      } else {
        reject("Invalid Data");
      }
    }, 4000);
  });
}

async function run() {
  console.log("Processing...");
  //   const result = await fetchData();
  //   console.log("Result = ", result);
  const successRes = await fetchData("valid");
  console.log("success Res = ", successRes);
}

// run();

async function fetchDataWithError() {
  try {
    const res = await fetchData();
    console.log("Try res = ", res);
  } catch (error) {
    console.log("error = ", error);
  }
}

fetchDataWithError();
