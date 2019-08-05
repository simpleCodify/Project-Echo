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
var msec = 800;
var playerName = $("#inlineFormInput").val();
var top5Scores = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

displayHighScores(false);

//-- User Keypress --//

document.getElementById('inlineFormInput').addEventListener("keyup", function(){
  playerName = $("#inlineFormInput").val();
})

$(document).on("keyup", function(e) {
  if (started === false) {
    if (e.keyCode == 32) {
      $("#level-title").text("Level " + level);
      started = true;
      nextSequence();   
    }
  } else {
    return;
  }
});

  //-- Test for Keyboard Key Press --//

$(document).on("keyup", function(e) {
  if( e.keyCode == 32) return ; 
  var audio2 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  let userPressedKey = $(`.key[data-key="${e.keyCode}"]`).attr("id");
  
  userClickedNotes.push(userPressedKey);

  audio2.currentTime = 0;
  
  playSound(userPressedKey);
  animatePress(userPressedKey);
  checkAnswer(userClickedNotes.length - 1);
});

//-- User Clicks a Piano Key --//

$(".key").click(function() {
  var userClickedKey = $(this).attr("id");
  userClickedNotes.push(userClickedKey);

  playSound(userClickedKey);
  animatePress(userClickedKey);
  checkAnswer(userClickedNotes.length - 1);
});

//-- Functions of the Game --//

function checkAnswer(currentLevel) {
  if (started == false) return;
  
  if (gamePattern[currentLevel] === userClickedNotes[currentLevel]) {
    if (userClickedNotes.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    started = false ;
    displayHighScores(true);
    playSound("wrong");

    $("#level-title").text("Game Over").css("color", "red");
    $(".key").addClass("game-over");
    $("#level-message").text(`You got to ${level} ${playerName}!`);

    setTimeout(function() {
      $("#level-title").css("color", "#353a3f");
      $(".key").removeClass("game-over");
      $("#level-message").text("");
    }, 1500);
    restart();
  }
}

//-- Message Section --//

function encouragementMessage(){
  
  switch(true){
    case level == 1:
      $("#level-message").text(`Welcome to Echo ${playerName}`);
      break;
    case level == 2:
      $("#level-message").text("TIP: There is no tip.");
      break;
    case level == 3:
      $("#level-message").text("Off to a good start I guess?");
      break;
    case level == 4:
      $("#level-message").text("Let's speed things up.");
      break;
    case level == 5:
      $("#level-message").text("Look at Me!!");
      break;
    case level == 6:
      $("#level-message").text("Did I mess you up?");
      break;
    case level == 7:
      $("#level-message").text(`Encouraging words just for you ${playerName}`);
      break;
    case level == 8:
      $("#level-message").text(`Alright. Fine. Let's go ${playerName}`);
      break;
    case level <= 10 && level > 8:
      $("#level-message").text("Ok. Is this fast enough yet?");
      break;
    case level <= 12 && level > 10:
      $("#level-message").text(`Good memory ${playerName}`);
      break;
    case level > 12:
      $("#level-message").text(`You're a god ${playerName}`);
      break;
    default:
      $("#level-message").text(`You got this ${playerName}!`);
  }

  $("#level-title").text("Level " + level);
  setTimeout(function() {
    $("#level-message").text("");
  }, 1500);
}

// --High Scores Function-- //

function displayHighScores(calcNeeded){
  if (calcNeeded) highScores();
  for (var i = 0 ; i < top5Scores.length  ; i++ ) {
    $("." + (i+1) + "level").text(top5Scores[i][1]);
    $("." + (i+1) + "name" ).text(top5Scores[i][0]);
  }
}

function highScores() {
  if ( playerName === "" ) return;
  var tmpTopScore = [playerName, level];
  if ( top5Scores.length == 0 ) {
    top5Scores.push(tmpTopScore);
    return ;
  } 
  for (var i = top5Scores.length - 1; i >= 0 ; i--) {
    if (level <= top5Scores[i][1]) {
      top5Scores.splice(i+1,0,tmpTopScore) ;
      break;
    }
    else if ( i == 0 ) {
      top5Scores.unshift(tmpTopScore);
    }
  }
  if ( top5Scores.length > 5 ) top5Scores.pop();

  localStorage.setItem('items', JSON.stringify(top5Scores))
}

//-- Next Sequence Function --//

function nextSequence() {
  userClickedNotes = [];
  level++;
  encouragementMessage();

  var randomKey ;
  var randomNum ;
  
  if (difficulty % 2 == 1) {
    randomNum = Math.floor(Math.random() * 7);
    randomKey = whitePianoKeysOnly[randomNum];
  }
  else {
    randomNum = Math.floor(Math.random() * 12);
    randomKey = pianoKeys[randomNum];
  }

  gamePattern.push(randomKey);
  interval();
  playSequence(gamePattern);

  if (difficulty == 1 || difficulty == 2) {
    animateSequence(gamePattern);
  }
}

//-- Keys Animation --//

function animatePress(currentKey) {
  $("#" + currentKey).addClass("pressed");
  setTimeout(function() {
    $("#" + currentKey).removeClass("pressed");
  }, 50);
}

function animateSequence(sequence) {
  sequence.forEach(function(eachKey, idx) {
    setTimeout(function() {
      $("#" + eachKey).fadeToggle(200).fadeToggle(200);
    }, idx*msec);
  })
}

//-- Audio Playback --//

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");

  audio.currentTime = 0;
  audio.play();
}

function playSequence(sequence) {
  var audio = [];
  
  for (var i = 0; i <= sequence.length; i++) {
    audio[i] = new Audio("sounds/" + sequence[i] + ".mp3");
  }

  audio.forEach(function(singleAudio, idx){
    setTimeout(function() {
      singleAudio.currentTime;
      singleAudio.play();
    }, idx*msec); 
  })
}

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}

//-- Timer --//

function interval(){
  msec = 800 - 100 * (level/2);
  if ( msec < 200 ) msec = 200 ;
}

//-- Difficulty Buttons --//

$('#button1').click(function() {
  difficulty = 1;
  $('#button2,#button3,#button4').removeClass("active");
  $(this).addClass("active");
});

$('#button2').click(function() {
  difficulty = 2;
  $('#button1,#button3,#button4').removeClass("active");
  $(this).addClass("active");
});

$('#button3').click(function() {
  difficulty = 3;
  $('#button1,#button2,#button4').removeClass("active");
  $(this).addClass("active");
});

$('#button4').click(function() {
  difficulty = 4;
  $('#button1,#button2,#button3').removeClass("active");
  $(this).addClass("active");
});

