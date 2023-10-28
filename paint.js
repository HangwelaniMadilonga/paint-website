let isBrush = true;
let isEraser = false;

let isDrawing = false;

let currentColor = "boo";
let currentTool = null;

let buttons = document.querySelectorAll('.colors');
let brush = document.querySelector('#brush-icon');
let eraser = document.querySelector('#eraser-icon');
let canvasArea = document.querySelector('#canvas');
let drawTools = document.querySelectorAll('.tools');


brush.addEventListener('click', function () {
    currentTool = "brush";

})

eraser.addEventListener('click', function () {
    currentTool = "eraser";

})

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

let selectColor = (button) => {
    for (let button of buttons) {
        button.classList.remove('enlarge-color');
    }

    currentColor = window.getComputedStyle(button).backgroundColor;
    button.classList.add('enlarge-color');
};

let selectTool = (tool) => {
    for (let tool of drawTools) {
        tool.classList.remove('enlarge-tool');
    }


    // drawTool = drawTool.style.backgroundColor;
    tool.classList.add('enlarge-tool');

    // console.log(currentColor);

};

let paint = () => {

}

let erase = () => {

}

