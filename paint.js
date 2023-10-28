let isBrush = true;
let isEraser = false;

let currentColor = "boo";
let currentTool = null;

let buttons = document.querySelectorAll('.colors');
let brush = document.querySelector('#brush-icon');
let eraser = document.querySelector('#eraser-icon');
let canvasArea = document.querySelector('#canvas');

for (let button of buttons) {
    button.addEventListener('click', function () {
        selectColor(button);

    })


}

let paint = () => {

};

let erase = () => {

};

let selectColor = (button) => {
    for (let button of buttons) {
        button.classList.remove('enlarge-color');
    }


    currentColor = button.style.backgroundColor;
    button.classList.add('enlarge-color');
    console.log(currentColor);
};

let selectTool = () => {

};


