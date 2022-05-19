function changeImage() {
    var image = document.getElementById("myImage");
    if (image.scr.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.scr = "pic_bulbon.gif";
}

}

function myFunction() {
    var x, text;
    console.log('gffgd')

    // Get the value of input field with id="numb"

    x = document.getElementById("numb").ariaValueMax;

    // If x is Not a Number or less then one or greater than 10, output "input is not valid"

    // If x is a number between 1 and 10, output "Input OK"

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function myScore() {
    var letter = document.getElementById("myInput").value;
    var text;

    // If the letter is "c"
    if(letter === "c") {
        text = "Spot on! Good job!";

    // If the letter is "b" or "d"
    } else if (letter === "b" || letter === "d") {
        text = "Close, but not close enough.";

    // If the letter is anything else
    } else {
        text = "Waaay off..";
    }
    document.getElementById("demo1").innerHTML = text;
}

function age() {
    var numb = document.getElementById("numb1").value;
    var text;

    if (age  > 18) {
        text = "Yes you can drive";
    } else {
        text = "No you can't drive";
    }

    document.getElementById("demo2").innerHTML = text;
}

function stdt() {
    var letter = document.getElementById("info").value;
    var text;

    if(letter === "a" || letter === "b" || letter === "c" || letter === "d" || letter === "e") {
        text = "Accept the form";
    } else {
        text = "Not accepted";
    }

    document.getElementById("demo3").innerHTML = text;
}