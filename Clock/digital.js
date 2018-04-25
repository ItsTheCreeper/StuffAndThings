
var time = setInterval(showTime, 1);
var date = setInterval(showDate, 1);
var color = setInterval(changeColor, 1);

function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    mins = addZero(mins);
    secs = addZero(secs);
    var ampm = "";

    if (hour > 12) {
        ampm = "PM";
        hour -= 12;
    } else if (hour < 13) {
        ampm = "AM";
        if (hour == 0) {
            hour += 12;
            ampm = "AM";
        } else if (hour == 12) {
            ampm = "PM";
        }   
    } else {
        console.log("Error: invalid hour");
    }

    function addZero(num) {
        if (num < 10) { num = "0" + num; };
        return num;
    }
    var timeToPrint = hour + ":" + mins + ":" + secs + " " + ampm;
    document.getElementById("time").innerHTML = timeToPrint;
}

function showDate() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var weekday = date.getDay();
    month = parseMonth(month);
    weekday = parseWeekday(weekday);
    var output = month + " " + day + ", " + year + " (" + weekday + ")";

    document.getElementById("date").innerHTML = output;
}

function parseWeekday(num) {
    switch (num) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            console.log("Error: invalid weekday");
    }
}

function parseMonth(num) {
    switch (num) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        default:
            console.log("Error: invalid month");
            break;
    }
}

function rndNumber() {
    var num = Math.floor(Math.random() * 256);
    return num;
}

function setRandomColor() {
    var randR = rndNumber();
    var randG = rndNumber();
    var randB = rndNumber();
    var color = "background-color: rgb(" + randR + ", " + randG + ", " + randB + ");";
    document.body.style = color;
 
}

function changeColor() {
    var time = new Date();
    var ms = time.getMilliseconds();
    if (ms >= 980) {
	setRandomColor();
    }
}