const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.strokeStyle = '#BADA55'; // start colour
ctx.lineJoin = 'round';  // joining line with round finish
ctx.lineCap = 'round'; // finish point with round corners

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
