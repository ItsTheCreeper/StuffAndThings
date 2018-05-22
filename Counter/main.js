
var count = 0;
var button = document.getElementById("button");
var output = document.getElementById("output");
button.onclick = function () {
    count += 1;
    output.innerHTML = count;
    output.style.color = generateRandomColor();
}


function generateRandomColor() {
    var colors = [0, 0, 0]
    for (var i = 0; i <= 2; i++) {
        colors[i] = rndNumber();
    }
    console.log("rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")")
    return "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
}

function rndNumber() {
    var num = Math.floor(Math.random() * 256);
    return num;
}