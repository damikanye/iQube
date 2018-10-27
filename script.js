var questions = [{
	"question": "Who acted Venom in Venom(2018) ?",
	"option1": "Tom Hardy",
	"option2": "John Wick",
    "option3": "Black Widow",
    "option4": "Iron-Man",
	"answer": "1"
}, {
	"question": "Who has all the infinity stones ?",
	"option1": "Super-Girl",
	"option2": "Super-Man",
	"option3": "Thanos",
	"option4": "Iron-Man",
	"answer": "3"
}, {
	"question": "Who acted black panther?",
	"option1": "Chadwick Aaron Boseman",
	"option2": "Michael Bakari Jordan",
	"option3": "Nakia",
	"option4": "Okoye",
	"answer": "1"
}, {
	"question": "What is the capital of Lagos ?",
	"option1": "Ikeja",
	"option2": "Yaba",
	"option3": "Surulere",
	"option4": "Ibafo",
	"answer": "1"
}, {
	"question": "Web pages are written using ?",
	"option1": "FTP",
	"option2": "HTTP",
	"option3": "HTML",
	"option4": "URL",
	"answer": "3"
}, {
	"question": "UNIVAC is an example of",
	"option1": "First generation computer",
	"option2": "Second generation computer",
	"option3": "Third generation computer",
	"option4": "Fourth generation computer",
	"answer": "1"
}, {
	"question": "What is the capital of Osun ?",
	"option1": "Ilesha",
	"option2": "Lagos",
	"option3": "Oshogbo",
	"option4": "Adamawa",
	"answer": "3"
}, {
	"question": "Graphic interfaces were first used in a xerox product is called ?",
	"option1": "Ethernet",
	"option2": "Inter LISP",
	"option3": "Small talk",
	"option4": "Zeta LISP",
	"answer": "1"
}, {
	"question": "Find the odd one out ?",
	"option1": "ORACLE",
	"option2": "SYBASE",
	"option3": "C",
	"option4": "INFORMIX",
	"answer": "3"
}, {
	"question": "The ------ is the administrative section of the computer system?",
	"option1": "Memory Unit",
	"option2": "Input Unit",
	"option3": "Central Processing Unit",
	"option4": "Control Unit",
	"answer": "3"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);