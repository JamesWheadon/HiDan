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

function changeBackground() {
    document.getElementById("body").style.background = getNextColor();
}