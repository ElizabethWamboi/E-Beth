const containerEl = document.querySelector(".container");

const hobbies =  [ "coding","playing football", "hiking", "hanging out", "Shopping"]

let hobbyIndex = 0

let characterIndex = 0

updateText()

function updateText(){
    characterIndex++
    containerEl.innerHTML = ` <h1>I LOVE ${hobbies[hobbyIndex].slice(0,characterIndex)}</h1>`
    if(characterIndex === hobbies[hobbyIndex].length){
        hobbyIndex++
        characterIndex = 0
    }

    if(hobbyIndex === hobbies.length){
        hobbyIndex = 0
    }
    setTimeout(updateText,400);
}

