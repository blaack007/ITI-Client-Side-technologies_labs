
async function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { url, status: 200 };
        resolve(data);
      }, 1000);
    });
  }
  
  fetchDataPromise("https://api.example.com")
    .then((data) => console.log("Promise Result:", data))
    .catch((err) => console.error(err));
  