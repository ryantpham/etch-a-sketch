const sketchPad = document.querySelector('.container')
const resetButton = document.querySelector('.reset')

//Creates 16x16 Grid
for(i=0;i<256;i++){
//Creates Grid and Draw
const square = document.createElement('div')
square.classList.add('square');
sketchPad.appendChild(square);

//Primary Color
square.addEventListener('mouseover',()=>{
    square.style.backgroundColor = "Gray";
})

//Reset Button
resetButton.addEventListener('click', ()=>{
    square.style.backgroundColor = "White";
})
}



