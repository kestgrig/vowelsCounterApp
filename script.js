const wordDOM = document.querySelector(".inputText");
const btnDOM = document.querySelector(".btn");
const resultDOM = document.querySelector(".results");


btnDOM.addEventListener("click", countVowel)

function countVowel() {
    let wordVal = wordDOM.value.toLowerCase()
    let vowelCount = 0

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i]

        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++
        }
    }
    resultDOM.innerHTML = `${wordDOM.value.toUpperCase()} has ${vowelCount} vowels`;
}
