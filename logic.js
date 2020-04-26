var questionOne = {
    firstQuest: "How many Great Lakes Are There?", 
    firstWrong: " <button> Six </button><br>",
    secondWrong: " <button> Three </button><br>",
    correctOne: " <button> Five </button><br>",
    optionList: function(){
        return this.firstWrong + this.secondWrong + this.correctOne;
    }
};

document.getElementById(firstWrong).addEventListener("click", function testAlert () {
    alert("Hello! I am an alert box!!");
    
    
    //show the question div
    //document.getElementById("questions").style.display = "none";
    //hide the start screen div
    //document.getElementById("start-screen").style.display = "block";
});
    testAlert();



