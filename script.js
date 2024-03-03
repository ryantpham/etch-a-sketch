const sketchPad = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const gridSize = document.querySelector('.gridSize');
const colorFun = document.querySelector('.colorFun')

function getRandomColor() {
    const red = Math.floor(Math.random() * 256); // Random number between 0-255
    const green = Math.floor(Math.random() * 256); // Random number between 0-255
    const blue = Math.floor(Math.random() * 256); // Random number between 0-255

    // Construct an RGB color string
    return `rgb(${red}, ${green}, ${blue})`;
}



//Creates 16x16 Grid (Default)
let size = 256;
for(let i=0;i < size;i++){
//Creates Grid and Draw
const square = document.createElement('div');
square.classList.add('square');
square.style.flex= "0 0 calc(100% / 16)"; /* Each square takes up 1/16th of the container's width */
square.style.height= "calc(500px / 16)"; /* Each square has a height of 1/16th of the container's height */
sketchPad.appendChild(square);

//Primary Color
square.addEventListener('mouseover',()=>{
    square.style.backgroundColor = "#FDCEDF";
});

//Reset Button
resetButton.addEventListener('click', ()=>{
    square.style.backgroundColor = "White";
    //Primary Color
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor = "#FDCEDF";
    });
});

//Remove all Squares
gridSize.addEventListener('click', ()=>{
    sketchPad.removeChild(square);
})

//Color Fun Button
colorFun.addEventListener('click', ()=>{
    square.style.backgroundColor = "White";
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = getRandomColor();
    });
});

};


//Grid Size button
gridSize.addEventListener('click', ()=>{
    const userInput = prompt("Select your preferred Grid Size:");
    let newGrid = userInput * userInput;
    for(let i = 0; i < newGrid;i++){
        //Remove all  Previous Squares
        gridSize.addEventListener('click', ()=>{
            sketchPad.removeChild(square);
        });

        //Creates Grid and Draw
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex= `0 0 calc(100% / ${userInput})`; /* Each square takes up 1/16th of the container's width */
        square.style.height= `calc(500px / ${userInput})`; /* Each square has a height of 1/16th of the container's height */
        sketchPad.appendChild(square);

        //Primary Color
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = "#FDCEDF";
        });

        //Reset Button
        resetButton.addEventListener('click', ()=>{
            square.style.backgroundColor = "White";
            //Primary Color
            square.addEventListener('mouseover',()=>{
                square.style.backgroundColor = "#FDCEDF";
            });
        });
        
        //Color Fun Button
        colorFun.addEventListener('click', ()=>{
            square.style.backgroundColor = "White";
            square.addEventListener('mouseover', ()=>{
                square.style.backgroundColor = getRandomColor();
            });
        });

    }
});





