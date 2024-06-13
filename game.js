var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var UserClickPattern = [];

var started = false;

var level = 0;
$(document).keypress(function(){
    if(!started){
        $(".title").text("Level " + level);
        nextSequence();
        started = true;
        $(".Start").hide();
    }
})
$(".Start").click(function(){
    if(!started){
        $(".title").text("Level " + level);
        nextSequence();
        started = true;
        $(".Start").hide();
    }
})
$(".box").click(function(){
    var UserChosanColor = $(this).attr("id");

    UserClickPattern.push(UserChosanColor)

    Playsound(UserChosanColor);

    AnimatePress(UserChosanColor)    ;
    
    Checkanswer(UserClickPattern.length-1);
})


function nextSequence() {
    UserClickPattern = []
    level++;
    $(".title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    
    Playsound(randomChosenColour);
    animate(randomChosenColour);
    


}


function Playsound(name){
    var audio = new Audio("./sounds/"+ name +".mp3");
    audio.play();
   
}

function animate(name){
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
}

function AnimatePress(name){
    $("#"+name).addClass("pressed");

    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    },100);
}


function Checkanswer(currentLevel){
    if(gamePattern[currentLevel] === UserClickPattern[currentLevel]){
        if (UserClickPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)

        Playsound("wrong");
        $(".title").text("Game Over, Press Any Key to Restart");
        Startover();
        $(".Start").show();
}
   
}

function Startover(){
    level = 0;
    gamePattern = [];
    started = false;
    
}
