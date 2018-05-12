
var rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
var cols = ["1", "2", "3", "4", "5", "6", "7", "8"];
var cr = 0;
var cc = 0;
var fcr = 0;
var fcc = 0;
var score = 0;
var time = 0;
var ts = 0;
var ongoing = false;
var interval;
var currentPixel = ["", ""];
var currentFood = ["", ""];
var slider = document.getElementById("slider");

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
    document.getElementById(currentFood[0] + currentFood[1]).style.backgroundColor = "red";
}

function clear() {
    var pixels = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixels.length; i++) {
        if (pixels[i].style.backgroundColor != "red") {
            pixels[i].style.backgroundColor = "white";
        }
    }
}

function startGame() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("start").style.display = "none";
    time = 3;
    document.getElementById("desc").style.display = "none";
    document.getElementById("slider").style.display = "none";
    startTimer();
    interval = setInterval(startTimer, 1000);
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
        document.getElementById("desc").style.display = "inherit";
        document.getElementById("slider").style.display = "inherit";
        appendScore();
    }
}

function startTimer() {
    document.getElementById("time").style.color = "green";
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
        clearInterval(interval);
        interval = setInterval(timer, 400);
        ongoing = true;
        time = 150
        setRandomPixel();
        setRandomFood();
    } else {
        time -= 1;
    }
}

function appendScore() {
    var trow = document.getElementsByClassName("tr");
    var datetime = parseDate();
    document.getElementById("scoretable").style.display = "table";
    var tr = document.createElement("TR");
    var tdtime = document.createElement("TD");
    var tdscore = document.createElement("TD");
    tr.setAttribute("class", "stc");
    tr.setAttribute("class", "tr");
    document.getElementById("scoretable").appendChild(tr);
    tdtime.setAttribute("class", "stc");
    tdscore.setAttribute("class", "stc");
    var dt = document.createTextNode(datetime);
    var scr = document.createTextNode(score);
    tdtime.appendChild(dt);
    tdscore.appendChild(scr);
    trow[ts].appendChild(tdtime);
    trow[ts].appendChild(tdscore);
    ts += 1;
}

function parseDate() {
    var date = new Date;
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var datestring = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " (" +
        date.getHours() + ":" + minutes() + ":" + seconds() + ")";
    function seconds() {
        var sec = date.getSeconds();
        if (sec < 10) {
            sec = "0" + sec;
        }
        return sec;
    }
    function minutes() {
        var min = date.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        return min;
    }
    return datestring;
}

function sizeOnLoad() {
    var slider = document.getElementById("slider");
    var pixels = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].style = "border-radius: " + slider.value + "px; padding: " + slider.value + "px";
    }
    document.getElementById("size").innerHTML = slider.value;
}

slider.oninput = function () {
    var pixels = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].style = "border-radius: " + this.value + "px; padding: " + this.value + "px";
    }
    document.getElementById("size").innerHTML = this.value;
}