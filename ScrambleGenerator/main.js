
function generate() {
    // Clear text box
    document.getElementById("result").innerHTML = "";
    // Length of scramble sequence (number input)
    var length = document.getElementById("length").value;
    // Scramble move
    var scramble = "";
    // List of moves
    var moves = ["F", "R", "U", "L", "B", "D",
        "F'", "R'", "U'", "L'", "B'", "D'",
        "F2", "R2", "U2", "L2", "B2", "D2"];
    // Code to print scramble to the screen
    for (var i = 0; i < length; i++) {
        scramble = (moves[rnd()] + " ");
        document.getElementById("result").innerHTML += scramble;
    }
}

// Random Number Generator (0-17)
function rnd() {
    var num = Math.floor(Math.random() * 18);
    return num;
}

// JAVASCRIPT 4 RICKROLLING UR FRENNS
function roll() {
    var rick = document.getElementById("rick");
    rick.play();
    document.getElementById("importanttext").innerHTML = "U GOT RICKROLLED!!1! "
}