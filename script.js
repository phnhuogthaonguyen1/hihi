'use strict';

var random_number= Math.floor(Math.random()*(20 - 1 + 1) + 1);
var score=20;
var highscore=''
function again() {
  random_number = Math.floor(Math.random()*(20 - 1 + 1) + 1);
  document.getElementById('guess_number').value = "";
  document.getElementById('msg').innerHTML = "Start guessing...";
  document.getElementById('score').innerHTML = '20'
  document.getElementById("num").innerHTML="?";
  document.getElementsByTagName('body')[0].setAttribute("style","background-color: #222;")
  score=20
}
function check() {
  var guess_number = document.getElementById('guess_number').value;
  guess_number=guess_number*1;
  highscore=document.getElementById('highscore').innerHTML
  highscore=highscore*1
  var text="";
  if (guess_number>random_number) {
    text="lower";
    score=score-1
  } else if (guess_number<random_number) {
    text="higher";
    score=score-1
  } else {
    text="correct number!";
    document.getElementById("num").innerHTML=random_number;
    document.getElementsByTagName('body')[0].setAttribute("style","background-color: #60b347;")
    if (score>highscore) {
      document.getElementById('highscore').innerHTML=score
    }
  }
  document.getElementById("msg").innerHTML=text
  document.getElementById('score').innerHTML=score
}