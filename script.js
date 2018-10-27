var questions = [
    {
        prompt: "Who acted venom in Venom(2018)?\n(a) John Wick \n (b) Tom Hardy \n (c) Thanos",
        answer: "b"
    },
    {
        prompt: "Who had all the infinity stones?\n(a) Thanos\n (b)Doctor Strange\n (c)Iron Man",
        answer: "a"
    },
    {
        prompt: "What is the color of an apple?\n(a) Blue\n (b) Green\n (c) Purple",
        answer: "b"
    },

]
var score = 0;
for (var i=0; i < questions.length; i++){
    var response= window.prompt(questions [i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct");    
    }else{
        alert("Wrong");
    }
}
alert("You got " + score + "/" + questions.length);