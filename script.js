var questDisplay = document.getElementById("questions").style.display = "none";
var endDisplay = document.getElementById("end-screen").style.display = "none";
//var startDisplay = document.getElementById("start-screen");

document.getElementById("start-button").addEventListener("click", function showQuiz () {
    var questionBank = {
        firstQuest: "Question 1", 
        firstAns:["answer1", "answer2", "answer3"], 
        secondQuest:"Question 2", 
        secondAns: ["answer1", "answer2", "answer3"],
        thirdQuest:"Question 3",};
   
   document.getElementById("questions").style.display = "block";
   document.getElementById("start-screen").style.display = "none";
   document.getElementById("question-title").innerHTML = questionBank.firstQuest;
   document.getElementById("options").innerHTML = questionBank.firstAns;


















   var timeoutHandle;

  function countdown(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function tick() {
      var counter = document.getElementById("time");
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
    }
    tick();
  }

  countdown(2);

});


