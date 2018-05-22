
var count = 0;
var button = document.getElementById("button");
var output = document.getElementById("output");
button.onclick = function () {
    count += 1;
    output.innerHTML = count;
}