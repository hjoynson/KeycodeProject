const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keycodeNum h2');
const displayKeyCodeDiv = document.querySelector('.keycode');

window.addEventListener('keydown', (e)=>{
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if(e.keyCode === 32){
        displayKey.innerText = `'space'`;
}

})

