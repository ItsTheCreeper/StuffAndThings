
// code from w3schools.com
var canvas = document.getElementById("analog");
canvas.style.backgroundColor = "#333333";
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);    
radius = radius * 0.90;

setInterval(showAnalogClock, 1);

function showAnalogClock() {
    drawClockFace(ctx, radius);
    drawClockNumbers(ctx, radius);
    drawAnalogTime(ctx, radius);
}

function drawClockFace(ctx, radius) {
    var gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    gradient = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    gradient.addColorStop(0, "#333333");
    gradient.addColorStop(0.5, "#888888");
    gradient.addColorStop(1, "#333333");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawClockNumbers(ctx, radius) {
    var angle;
    var num;

    ctx.font = radius * 0.10 + "px Overpass";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    for (num = 1; num < 13; num++) {
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle);
    }
}

function drawAnalogTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // hour

    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawClockHands(ctx, hour, radius * 0.5, radius * 0.07);

    //  minute

    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawClockHands(ctx, minute, radius * 0.8, radius * 0.07);

    // second

    second = (second * Math.PI / 30);
    drawClockHands(ctx, second, radius * 0.9, radius * 0.02);
}

function drawClockHands(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
