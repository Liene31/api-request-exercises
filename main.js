const randomWordPara = document.getElementById("random-word");

function getRandomWord() {
  const apiUrl = "https://random-word-api.herokuapp.com/word";
  axios
    .get(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        const randomWord = response.data;
        const wordLength = getLengthOfWord(randomWord);

        displayWorld(randomWord);
        drawLetterBox(wordLength);
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function displayWorld(world) {
  randomWordPara.textContent = world;
}

function getLengthOfWord(word) {
  return word.toString().length;
}

function drawLetterBox(length) {
  const letterBoxContainerDiv = document.getElementById("letter-box-container");

  for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.classList.add("letter-box");

    letterBoxContainerDiv.append(div);
  }
}

getRandomWord();
