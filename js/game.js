//-- Variables / Constants Declarations --//

var pianoKeys = [
  "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A5", "As5", "B5"
];
var userPressedKey;

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

$(document.body).on('keydown', function(e) {
  //-- Test for Keyboard Key Press --//

  //console.log(e.keyCode);
  //userPressedKey = e.keyCode;
  //console.log(userPressedKey);

  var audio2 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  audio2.currentTime = 0;
  audio2.play();
});

//-- User Clicks a Piano Key --//

$(".key").click(function() {
  var userClickedKey = $(this).attr("id");
  userClickedNotes.push(userClickedKey);
  console.log(userClickedKey);
  console.log(userClickedNotes);
  console.log((gamePattern === userClickedNotes));
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

  audio.currentTime = 0;
  audio.play();
}

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}
