let isBrush = true;
let isEraser = false;
let isDrawing = false;

let currentColor = "black"; // Default to black. You can change it later.
let currentTool = null;

let buttons = document.querySelectorAll('.colors');
let brush = document.querySelector('#brush-icon');
let eraser = document.querySelector('#eraser-icon');
let canvas = document.querySelector('#canvas-section');
let ctx = canvas.getContext('2d'); // Get the 2D drawing context
let drawTools = document.querySelectorAll('.tools');

canvas.addEventListener('mousedown', function () {
    isDrawing = true;
    draw(event); // Start drawing immediately upon click
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
    ctx.beginPath(); // End the current drawing path
});

canvas.addEventListener('mousemove', draw);

brush.addEventListener('click', function () {
    currentTool = "brush";
    ctx.globalCompositeOperation = "source-over"; // Default mode for painting
});

eraser.addEventListener('click', function () {
    currentTool = "eraser";
    ctx.globalCompositeOperation = "destination-out"; // Use this to erase
});

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
    ctx.strokeStyle = currentColor; // Set the stroke color for the canvas
    button.classList.add('enlarge-color');
};

let selectTool = (tool) => {
    for (let tool of drawTools) {
        tool.classList.remove('enlarge-tool');
    }
    tool.classList.add('enlarge-tool');
};

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 5; // You can change this for a thicker/thinner line
    ctx.lineCap = "round"; // Makes the line edges round

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
