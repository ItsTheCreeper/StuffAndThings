
var rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
var cols = ["1", "2", "3", "4", "5", "6", "7", "8"];
var cr = 0;
var cc = 0;
var fcr = 0;
var fcc = 0;
var score = 0;
var time = 0;
var ongoing = false;
var interval;
var currentPixel = ["", ""];
var currentFood = ["", ""];

document.onkeydown = move;

function move(key) {
    if (ongoing == true) {
        key = key || window.event;
        switch (key.keyCode) {
            case 65:
                clear();
                if (cc != 0) {
                    cc -= 1;
                }
                displayPixel();
                break;
            case 87:
                clear();
                if (cr != 0) {
                    cr -= 1;
                }
                displayPixel();
                break;
            case 68:
                clear();
                if (cc != 7) {
                    cc += 1;
                }
                displayPixel();
                break;
            case 83:
                clear();
                if (cr != 7) {
                    cr += 1;
                }
                displayPixel();
                break;
            case 9:
            case 18:
                console.log("hi");
                break;
        }
        if (currentPixel[0] == currentFood[0]
            && currentPixel[1] == currentFood[1]) {
            score += 1;
            setRandomFood();
            document.getElementById("score").innerHTML = score;
        }
    }
}

function setRandomPixel() {
    var rnd1 = Math.floor(Math.random() * 8);
    var rnd2 = Math.floor(Math.random() * 8);
    cr = rnd1;
    cc = rnd2;
    displayPixel();
}

function setCurrentPixel() {
    currentPixel[0] = rows[cr];
    currentPixel[1] = cols[cc];
    var pixel = currentPixel[0] + currentPixel[1];
    return pixel;
}

function displayPixel() {
    currentPixel[0] = rows[cr];
    currentPixel[1] = rows[cc];
    document.getElementById(setCurrentPixel()).style.backgroundColor = "black";
}

function setRandomFood() {
    var rnd1 = Math.floor(Math.random() * 8);
    var rnd2 = Math.floor(Math.random() * 8);
    fcr = rnd1;
    fcc = rnd2;
    if (fcr == cr && fcc == cc) {
        setRandomFood();
    }
    currentFood[0] = rows[fcr];
    currentFood[1] = cols[fcc];
    document.getElementById(currentFood[0] + currentFood[1]).style.backgroundColor = "blue";
}

function clear() {
    var pixels = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixels.length; i++) {
        if (pixels[i].style.backgroundColor != "blue") {
            pixels[i].style.backgroundColor = "white";
        }
    }
}

function startGame() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("start").style.display = "none";
    ongoing = true;
    time = 150;
    document.getElementById("time").innerHTML = time;
    interval = setInterval(timer, 400);
    setRandomPixel();
    setRandomFood();
}

function timer() {
    if (time > 0) {
        if (time <= 11) {
            document.getElementById("time").style.color = "red";
            clearInterval(interval);
            interval = setInterval(timer, 1000);
        } else {
            document.getElementById("time").style.color = "black";
        }
        time -= 1;
        document.getElementById("time").innerHTML = time;
    } else {
        var pixels = document.getElementsByClassName('pixel');
        ongoing = false;
        alert("Time's up!");
        alert("Your score: " + score);
        clearInterval(interval);
        document.getElementById("start").style.display = "block";
        document.getElementById("time").style.color = "black";
        document.getElementById("start").innerHTML = "Restart game";
        for (var i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = "white";
        }
    }
}
