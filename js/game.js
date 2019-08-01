//-- Variables / Constants Declarations --//

var pianoKeys = [
  "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A5", "As5", "B5"
];

var gamePattern = [];
var userClickedNotes = [];
var started = false;
var level = 0;

//-- User Keypress --//

$(document).on("keyup", function(e) {
  if (!started) {
    if (e.keyCode == 32) {
      $("#level-title").text("Level" + level);
      nextSequence();
      started = true;
    }
  } else {
    return;
  }
});

$(document).on("keyup", function(e) {
  //-- Test for Keyboard Key Press --//

  //console.log(e.keyCode);
  var audio2 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  var userPressedKey = $(`.key[data-key="${e.keyCode}"]`).attr("id");


  //-- logic for pressed key on keyboard being pushed into array --//
  userClickedNotes.push(userPressedKey);

  if (!key) return;

  audio2.currentTime = 0;
  audio2.play(userPressedKey);

  animatePress(userPressedKey);
  checkAnswer(userClickedNotes.length - 1);
});

//-- User Clicks a Piano Key --//

$(".key").click(function() {
  var userClickedKey = $(this).attr("id");
  userClickedNotes.push(userClickedKey);
  console.log(userClickedKey);
  playSound(userClickedKey);
  animatePress(userClickedKey);

  checkAnswer(userClickedNotes.length - 1);
});

//-- Functions of the Game --//

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedNotes[currentLevel]) {
    if (userClickedNotes.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    restart();
  }
}

function nextSequence() {
  userClickedNotes = [];
  level++;
  $("#level-title").text("Level" + level);

  var randomNum = Math.floor(Math.random() * 13);
  var randomKey = pianoKeys[randomNum];

  gamePattern.push(randomKey);

  $("#" + randomKey).fadeIn(100).fadeOut(100).fadeIn(100);
  playSequence();
  return gamePattern;
}

function animatePress(currentKey) {
  $("#" + currentKey).addClass("pressed");
  setTimeout(function() {
    $("#" + currentKey).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");

  audio.currentTime = 0;
  audio.play();
}

// function playSequence(gamePattern) {
//   for (var i = 0; i < gamePattern.length; i++) {
//     var audio = new Audio("sounds/" + gamePattern[i] + ".mp3");
//
//     audio.currentTime = 0;
//     audio.play();
//   }
// }

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}
