let col1 = 255;
let col2 = 255;
let col3 = 255;
let colours = [col1, col2, col3];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeBackground() {
    let i = Math.floor(Math.random() * 3);
    if (colours[i] > 0) {
        colours[i] -= 1;
    }
    else {
        colours[i] = 255;
    }
    document.getElementById("body").style.background = getRandomColor();
    /*document.getElementById("body").style.background-color = rgb(colours[0], colours[1], colours[2]);*/
}