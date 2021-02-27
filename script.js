function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

let currentColor = '#FFFFFF'
let currentColor1 = '#FFFFFF'

function getNextColor() {
    const letters = '0123456789ABCDEF';
    i =  Math.floor(Math.random() * 3);
    j = Math.floor(Math.random() * 10);
    let firstIndex = letters.indexOf(currentColor[2 * i + 1]);
    let secondIndex = letters.indexOf(currentColor[2 * i + 2]);
    if (secondIndex > j){
        currentColor = setCharAt(currentColor, 2 * i + 1, letters[firstIndex]);
        currentColor = setCharAt(currentColor, 2 * i + 2, letters[secondIndex - j]);
    }
    else if (firstIndex > 0) {
        currentColor = setCharAt(currentColor, 2 * i + 1, letters[firstIndex - 1]);
        currentColor = setCharAt(currentColor, 2 * i + 2, letters[15 + secondIndex - j]);
    }
    else {
        currentColor = setCharAt(currentColor, 2 * i + 1, letters[15]);
        currentColor = setCharAt(currentColor, 2 * i + 2, letters[15]);
    }
    return currentColor;
}

let hue = 0;
let saturation = 100;
let lightness = 50;
let alpha = 1;

/* function getHSLColor() {
    let  i = Math.floor(Math.random() * 2);
    if (i === 0) {
        hue += Math.floor(Math.random() * 30);
    }
    else {
        hue -= Math.floor(Math.random() * 30);
    }
    if (hue < 0 || hue >= 360) {
        hue = Math.floor(Math.random() * 360)
    }
    currentColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha})`
    return currentColor;
} */

function getHSLColor() {
    hue += 1;
    if (hue === 360) {
        hue = 0
    }
    currentColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha})`
    return currentColor;
}

let hue1 = 0;
let saturation1 = 100;
let lightness1 = 50;
let alpha1 = 1;

function getHSL1Color() {
    let  i = Math.floor(Math.random() * 2);
    if (i === 0) {
        hue1 += Math.floor(Math.random() * 5);
        lightness1 += 1;
    }
    else {
        hue1 -= Math.floor(Math.random() * 5);
        lightness1 -= 1;
    }
    if (hue1 < 0 || hue1 >= 360) {
        hue1 = Math.floor(Math.random() * 360)
    }
    currentColor1 = `hsla(${hue1},${saturation1}%,${lightness1}%,${alpha1})`
    return currentColor1;
}

function changeBackground() {
    document.getElementById("body").style.background = getHSLColor();
}

setInterval(changeBackground, 500);
function changeBackground1() {
    document.getElementById("body1").style.background = getHSL1Color();
}