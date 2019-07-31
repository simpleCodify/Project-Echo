//-- Variables / Constants Declarations --//

var pianoKeys = [
  "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A5", "As5", "B5"
];

var gamePattern = [];
var userClickedNotes = [];

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

$(".key").click(function() {
  var userClickedKey = $(this).attr("id");
  userClickedNotes.push(userClickedKey);
  console.log(userClickedKey);
  console.log(userClickedNotes);
  playSound(userClickedKey);
});

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
