// Hide Question and End Screen Elements initially
var questDisplay = document.getElementById("questions").style.display = "none";
var endDisplay = document.getElementById("end-screen").style.display = "none";


var index = 0;
var correct = 0;
var incorrect = 0


//

var questions =
    [
        {
            q: "How Many Great Lakes Are There?",
            a: ["Five", "Three", "Seven"],
            c: 0
        },
        {
            q: "Choose the U.S. Territory",
            a: ["Dominican Republic", "Puerto Rico", "Cuba"],
            c: 1
        },
        {
            q: "Which State is a Peninsula?",
            a: ["Hawaii", "Maine", "Florida"],
            c: 2
        },
    ]
// index = 0  and show the first question to the user
// when the user click  => verify 
// verify if I have more question => show next question

//When you Click the Start Quiz Button
document.getElementById("start-button").addEventListener("click", function () {

    //show the question div
    document.getElementById("questions").style.display = "block";
    //hide the start screen div
    document.getElementById("start-screen").style.display = "none";

    // here call start the timmer

    showQuestions()
    //fill in question and answer list one from the object
})
// document.getElementById("options").innerHTML = questionOne.optionList()
function showQuestions() {
    document.getElementById("question-title").innerHTML = questions[index].q;
    // loop (initial value, codition, opration after every loop)
    document.getElementById("options").innerHTML =""
    for (var i = 0; i < questions[index].a.length; i++) {
        console.log(questions[index].a[i])
        let btn = document.createElement("button")
        btn.className = "response"
        btn.setAttribute("indexA", i)
        btn.setAttribute("indexQ", index)
        
        btn.innerHTML = questions[index].a[i]
        document.getElementById("options").append(btn)
    }

    var allBtn = document.querySelectorAll(".response")
    for (var i = 0; i < allBtn.length; i++) {
        allBtn[i].addEventListener("click", function (event) {
            console.log("click:", event.target)
            let indexQ = parseInt(event.target.getAttribute("indexa"))
            let indexA = parseInt(event.target.getAttribute("indexq"))
            //verify
            console.log("click", indexQ, indexA)
            console.log(questions[indexQ].a[indexA])
            console.log("break")
            console.log(questions[indexQ].c)

            var correctAnswerIndex = questions[indexQ].c ;
         
            if (questions[indexQ].a[indexA] === 
                questions[indexQ].a[correctAnswerIndex]) {
                correct++
                console.log("correct")
                alert("correct!")

            }
            else {
                incorrect++
                console.log("incorrect")
                 alert("sorry, that's wrong")
            }
            
            index++
            if (index > questions.length - 1){
            showResults()
            }
            // verify if we are done with questions
            else{
            showQuestions()
            }
        })

    }

    function showResults () {
    //hide the question div
    document.getElementById("questions").style.display = "none";
    //show the end screen div
    document.getElementById("end-screen").style.display = "block";
    //show score
    document.getElementById("final-score").innerHTML = index - incorrect;
    };

    document.getElementById("submit-button").addEventListener("click", function () {
        localStorage.setItem("highScore", initials.input)
    })

  



    //TEMPORARY Timer functionality borrowed from online example
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

                    setTimeout(function () {
                        countdown(mins - 1);
                    }, 1000);

                }
            }
        }
        tick();
    }

    countdown(2);

};
