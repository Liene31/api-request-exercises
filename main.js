const setupPara = document.getElementById("setup");
const punchlinePara = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchline-btn");

// fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
//   .then((response) => response.json())
//   .then((data) => {
//     setupPara.textContent = data[0].setup;

//     console.log(data);

//     punchlineBtn.addEventListener("click", () => {
//       punchlinePara.textContent = data[0].punchline;
//     });
//   });

axios
  .get("https://official-joke-api.appspot.com/jokes/programming/ten")
  .then((response) => {
    console.log(response);
    if (response.status === 200) {
      console.log(response.status);
      const punchline = response.data[0].punchline;

      setupPara.textContent = response.data[0].setup;

      console.log(response.data);

      punchlineBtn.addEventListener("click", () => {
        punchlinePara.textContent = response.data[0].punchline;
      });
    }
  })
  .catch((error) => {
    console.log(`Error ${error.status}`);
  });

const setupOne = document.getElementById("setup-1");
const setupBtn = document.getElementById("setup-btn");

setupBtn.addEventListener("click", showSetup);

function getJokes() {
  // gets jokes from the API
  const apiUrl = "https://official-joke-api.appspot.com/jokes/programming/ten";
  axios.get(apiUrl).then(showSetup);
}

function showSetup(response) {
  // button which generates random setups from API

  setupOne.textContent = response.data[0].setup;
}

function displayAnswer() {
  //button which generate the answer based on the API
}

getJokes();
