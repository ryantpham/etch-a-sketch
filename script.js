const sketchPad = document.querySelector('.container')
//Creates 16x16 Grid
for(i=0;i<256;i++){
const square = document.createElement('div')
square.classList.add('square');
sketchPad.appendChild(square);
}
