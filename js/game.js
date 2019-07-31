//-- Variables / Constants Declarations --//

var pianoKeys = [
  "c4", "c-4", "d4", "d-4", "e4", "f4", "f-4", "g4", "g-4", "a5", "a-5", "b5"
];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//-- User Keypress --//

$(document).keypress(function() {
  if (!started) {
    $("level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

//-- User Clicks a Piano Key --//

$()

//-- Functions of the Game --//


function checkAnswer(currentLevel) {

}

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 13);
  var randomKey = pianoKeys[randomNum];
  gamePattern.push(randomKey);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}
