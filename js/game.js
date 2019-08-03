//-- Variables / Constants Declarations --//

var pianoKeys = [
  "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A5", "As5", "B5"
];

var whitePianoKeysOnly = [
  "C4", "D4", "E4", "F4", "G4", "A5", "B5"
];

var gamePattern = [];
var userClickedNotes = [];
var started = false;
var level = 0;
var difficulty = 1;

//-- User Keypress --//

$(document).on("keyup", function(e) {
  if (started === false) {
    if (e.keyCode == 32) {
      $("#level-title").text("Level " + level);
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

  //if (!key) return;

  audio2.currentTime = 0;
  //audio2.play(userPressedKey);
  playSound(userPressedKey);

  animatePress(userPressedKey);
  checkAnswer(userClickedNotes.length - 1);
});

//-- User Clicks a Piano Key --//

$(".key").click(function() {
  $('.options-pane').addClass('hidden');
  var userClickedKey = $(this).attr("id");
  userClickedNotes.push(userClickedKey);

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
    //playSound("wrong");
    //$("body").addClass("game-over");
    $("#level-title").text("Game Over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 300);
    restart();
  }
}

function nextSequence() {
  userClickedNotes = [];
  level++;
  $("#level-title").text("Level " + level);

  //--Logic for Difficulty Level : if (difficulty === 1) randomNum = 1-7, 
  
  if (difficulty == 1 || difficulty == 3) {
    var randomNum = Math.floor(Math.random() * 7);
    var randomKey = whitePianoKeysOnly[randomNum];
  }

  if (difficulty == 2 || difficulty == 4) {
    var randomNum = Math.floor(Math.random() * 12);
    var randomKey = pianoKeys[randomNum];
  }

  gamePattern.push(randomKey);
  playSound(randomKey);

  if (difficulty == 1 || difficulty == 2) {
    $("#" + randomKey).fadeToggle(100).fadeToggle(100);
  }
  
  console.log(gamePattern);
  console.log(userPressedKey);
}

function animatePress(currentKey) {
  $("#" + currentKey).addClass("pressed");
  setTimeout(function() {
    $("#" + currentKey).removeClass("pressed");
  }, 50);
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

$('.options-btn').click(function(){
  $('.options-pane').addClass('show');
  
});

$('.options-pane').click(function(){
  $(this).addClass('hidden');
});

