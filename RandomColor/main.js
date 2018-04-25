
// Random Number Generator (0-255)

function rndNumber() {
    var num = Math.floor(Math.random() * 256);
    return num;
}

function setRandomColor() {
    // Set 3 vars which are individual values for each rgb value
    var randR = rndNumber();
    var randG = rndNumber();
    var randB = rndNumber();
    // Elements where each value is printed
    var r = document.getElementsByClassName("r");
    var g = document.getElementsByClassName("g");
    var b = document.getElementsByClassName("b");
    var hex = document.getElementsByClassName("hex");
    // Convert decimal values to hex values
    var hexR = randR.toString(16);
    var hexG = randG.toString(16);
    var hexB = randB.toString(16);
    // Adds 0 at the beginning if value is less than 2 chars. long.
    if (hexR.length < 2) {
        hexR = "0" + hexR;
    }
    if (hexG.length < 2) {
        hexG = "0" + hexG;
    }
    if (hexB.length < 2) {
        hexB = "0" + hexB;
    }
    // Concatenate the hex values into one string
    var hexColor = "#" + hexR + hexG + hexB;
    // Set the background color
    var color = "background-color: rgb(" + randR + ", " + randG + ", " + randB + ");";
    document.body.style = color;
    // Print the values on the screen
    r[0].innerHTML = randR;
    r[1].innerHTML = randR;
    g[0].innerHTML = randG;
    g[1].innerHTML = randG;
    b[0].innerHTML = randB;
    b[1].innerHTML = randB;
    hex[0].innerHTML = hexColor;
    hex[1].innerHTML = hexColor;
}