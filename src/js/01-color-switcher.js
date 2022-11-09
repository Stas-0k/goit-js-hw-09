const startBttn = document.querySelector('[data-start]')
const stopBttn = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')
let idInt = 0; 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackground() { 
    idInt = setInterval(() => { bodyEl.style.backgroundColor = getRandomHexColor() }, 1000);
    startBttn.disabled = 'true'
}

startBttn.addEventListener('click', changeBackground)
stopBttn.addEventListener('click', stopChange)

function stopChange() { 
    clearInterval(idInt)
    startBttn.removeAttribute('disabled')
}


