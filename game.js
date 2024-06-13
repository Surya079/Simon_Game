var ButtonColors = ["red","blue","yellow","green"]

var GamePattern = []

function nextSequence(){

    let RandomNumber = Math.floor(Math.random() * 4);

    randomChooseColour = ButtonColors[RandomNumber];

    GamePattern.push(randomChooseColour);

    console.log(GamePattern);

}
nextSequence();
var RandomChooseColour = "#" + GamePattern.toString();
console.log(RandomChooseColour);
$(document).on("keypress", function(event){
    $(RandomChooseColour).fadeOut(100).fadeIn(100);
})