function reply()
{
  var question = document.getElementById("question").value;
  
  var displayQuestion = document.createElement("p");
  displayQuestion.style.fontFamily = "monospace";
  displayQuestion.style.padding = "2.2em";
  displayQuestion.innerText = "Question: "+question;

  var clearQuestion = document.getElementById("question");
  clearQuestion.value = "";
  

  var displayAnswer = document.createElement("p");
  displayAnswer.style.fontFamily = "monospace";
  displayAnswer.style.padding = "0em 2.2em 1em 2.2em";
  displayAnswer.style.borderBottom = "1px solid 	#808080";
  displayAnswer.innerText = "Answer : Generic Answer";
  
  var displayResult = document.getElementById("displayResult");

  displayResult.appendChild(displayQuestion);
  displayResult.appendChild(displayAnswer);
  
}

function clearReply()
{
  var results = document.getElementById("displayResult");
  results.remove();

  var clearQuestion = document.getElementById("question");
  clearQuestion.value = "";
} 
