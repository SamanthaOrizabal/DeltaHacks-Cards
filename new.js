var slider = document.getElementById("myRange");
var sliderTwo = document.getElementById("myRangeTwo");
var sliderThree = document.getElementById("myRangeThree");

var output = document.getElementById("value");
var outputTwo = document.getElementById("valueTwo");
var outputThree = document.getElementById("valueThree");

output.innerHTML = slider.value;
outputTwo.innerHTML = sliderTwo.value;
outputThree.innerHTML = sliderThree.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

sliderTwo.oninput = function() {
    outputTwo.innerHTML = this.value;
}

sliderThree.oninput = function() {
    outputThree.innerHTML = this.value;
}
