const color = document.querySelector('#color'); 
const eraser = document.querySelector("#eraser"); 
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const sizeDisplay = document.querySelector("#size");
const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pos = { x: 0, y: 0 };
let isDrawing = false;
let colorPaint = '#000000';
let size = 5; 

sizeDisplay.innerText = size;

function setPosition(e) {
    pos.x = e.offsetX;
    pos.y = e.offsetY;
}

function draw(e) {
    if (!isDrawing) return;

    ctx.beginPath(); 
    ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = size; 
    ctx.stroke();
}

document.addEventListener('mousedown', (e) => {
    setPosition(e);
    isDrawing = true;
});

document.addEventListener('mousemove', draw);

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

color.addEventListener('change', (e) => {
    colorPaint = e.target.value;
});

eraser.addEventListener('click', () => {
    colorPaint = '#ffffff';
});

decrease.addEventListener('click', () => {
    size = Math.max(5, size - 5);
    sizeDisplay.innerText = size;
});

increase.addEventListener('click', () => {
    size = Math.min(50, size + 5);
    sizeDisplay.innerText = size;
});
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
save.addEventListener('click', () => {
    const data = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = data;
    a.download = 'image.png';
    a.click();
}
);