let isBrush = true;
let isEraser = false;

let currentColor = "boo";
let currentTool = null;

let buttons = document.querySelectorAll('.colors');
let brush = document.querySelector('#brush-icon');
let eraser = document.querySelector('#eraser-icon');
let canvasArea = document.querySelector('#canvas');
let drawTools = document.querySelectorAll('.tools')

for (let button of buttons) {
    button.addEventListener('click', function () {
        selectColor(button);

    })
}

for (let tool of drawTools) {
    tool.addEventListener('click', function () {
        selectTool(tool);

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

let selectTool = (tool) => {
    for (let tool of drawTools) {
        tool.classList.remove('enlarge-tool');
    }


    // drawTool = drawTool.style.backgroundColor;
    tool.classList.add('enlarge-tool');
    // console.log(currentColor);

};


