////////////////////////////////////  TRIVIA GAME  ////////////////////////////////////


// Here im creating an Array with a couple of objects which is going to save all of the questions, answers and if they are true or false 

const questions = [
    {
        question: "¿Cual es el la montaña mas grande del mundo?",
        image: "https://cdn0.geoenciclopedia.com/es/posts/8/0/0/montanas_8_orig.jpg",
        answers:[
            {text: "Makalu", correct: false},
            {text: "Nanga Parbat", correct: false},
            {text: "Monte Everest", correct: true},
            {text: "Annapurna I", correct: false},
            
        ]
    },
    {
        question: "¿Cuál es el planeta más cercano al Sol?",
        image: "/Images/planets.avif",
        answers:[
            {text: "Venus", correct: false},
            {text: "Mercurio", correct: true},
            {text: "Marte", correct: false},
            {text: "Júpiter", correct: false},
            
        ]
    },
    {
        question: "¿Cuál es el océano más grande del planeta?",
        image: "/Images/ocean.avif",
        answers:[
            {text: "Océano Pacífico", correct: true},
            {text: "Océano Índico", correct: false},
            {text: "Océano Ártico", correct: false},
            {text: "Océano Atlántico", correct: false},
            
        ]
    },
    {
        question: "¿Quién pintó la famosa obra 'La Mona Lisa'?",
        image: "/Images/monaLisa.avif",
        answers:[
            {text: "Pablo Picasso", correct: false},
            {text: "Claude Monet", correct: false},
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            
        ]
    },
    {
    question: "¿En qué continente se encuentra Egipto?",
    image: "/Images/mapaMundi.avif",
    answers: [
        { text: "Asia", correct: false },
        { text: "África", correct: true },
        { text: "Europa", correct: false },
        { text: "América", correct: false }
    ]
},
{
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
     image: "/Images/anatomia.avif",
    answers: [
        { text: "Hígado", correct: false },
        { text: "Cerebro", correct: false },
        { text: "Piel", correct: true },
        { text: "Pulmones", correct: false }
    ]
},
{
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    image: "/Images/guerra.avif",
    answers: [
        { text: "1914", correct: false },
        { text: "1939", correct: true },
        { text: "1945", correct: false },
        { text: "1929", correct: false }
    ]
},
{
    question: "¿Cuál es el idioma más hablado en el mundo?",
    image: "/Images/flags.avif",
    answers: [
        { text: "Inglés", correct: false },
        { text: "Español", correct: false },
        { text: "Chino mandarín", correct: true },
        { text: "Árabe", correct: false }
    ]
},
{
    question: "¿Cuál fue la primera película de animación de Disney?",
    image: "/Images/disney.avif",
    answers: [
        { text: "Pinocho", correct: false },
        { text: "Dumbo", correct: false },
        { text: "Blanca Nieves y los siete enanitos", correct: true },
        { text: "Bambi", correct: false }
    ]
},
{
    question: "¿Cuántos días tiene un año bisiesto?",
    image: "/Images/años.avif",
    answers: [
        { text: "364", correct: false },
        { text: "365", correct: false },
        { text: "366", correct: true },
        { text: "367", correct: false }
    ]
}


];

const audioCorrect = new Audio('');
audioCorrect.src = "./Sonidos/correctAnswer.mp3"; 
const audioInorrect = new Audio('');
audioInorrect.src = "./Sonidos/incorrectAnswer.mp3";


const questionElement = document.getElementById("question"); // Here i'm getting the questions element that its going to have the question from HTML by its ID
const answerButton = document.getElementById("answerBtn"); // And here we are getting the answers buttons element which contain all of the options by its ID 
const nextButton = document.getElementById("next-btn")

const  imageElement = document.getElementById("quizImage");

const tryAgainButton = document.createElement("button");


let currentQuestionIndex = 0; // This is the position of the questions that we are going to be taking from the array. 
let score = 0; // And here we are going to save the score that the user is getting, every time he answer a question.

function starQuiz(){ // This is a function that is going to start the quiz 

    currentQuestionIndex = 0; // Here we reset the question index to '0'
    score = 0; // Here we reset the score index to '0'
    nextButton.innerHTML = 'Next <img class="imgOfNextBtn" src="https://www.shutterstock.com/shutterstock/videos/1068730820/thumb/1.jpg?ip=x480" alt="Description of Image">';
    nextButton.classList.add("nextBtn");
    showQuestion();

}

function showQuestion(){ // This is a function to show the actual question that the user is gonna have.

    let currentQuestion = questions[currentQuestionIndex]; // This is a variable that is going to save the first position from the array "questions" that is in the top, and we're getting the questions with the current index that we are going to be working with.
    let questionNo = currentQuestionIndex + 1; // Here i'm creating a variable that has the current index plus 1.

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Here im calling the element from HTML that have the questions, then we are putting the current index, plus 1 with the variable "questionNo", then we are adding a ". " and then we are getting the question to be showed, with the variable "currentQuestion" which has the index of the current question, and then selecting the "question" from the current index in the array.

     imageElement.src = currentQuestion.image;
  

    answerButton.innerHTML = ""; // Clear previous buttons

    currentQuestion.answers.forEach(answer => { // Here we created a loop with a parameter called "answer", that is going to create a button, for each answer.
 
        const button = document.createElement("button"); // here i created the variable that is going to create a button.
        button.innerHTML = answer.text; // Here i gave to the button the text of the question that is selected by its index. 
        button.classList.add("btn");
        answerButton.appendChild(button); // This is going to allow us to get the button created in this loop, inside of the "answerBtn" element where we have all of the buttons for the different answers. 
        if(answer.correct){ // In this conditional, we're going to identify if the button that the user press, is the correct or the incorrect answer.

            button.dataset.correct = answer.correct; 
            
        }
        button.addEventListener("click", selectedAnswer) ;
        
        

    });


}

function selectedAnswer(e){

    const selectedBtn = e.target; // This is to identify the specific button that was clicked.
    const isCorrect = selectedBtn.dataset.correct === "true"; // This is to save the correct answer.

    if(isCorrect){ // This is going to be a conditional to identify if the user press the correct answer.

        selectedBtn.classList.add("correct");
        audioCorrect.play();
        score++;
        

    }else{ // And this one is going for the wrong answer.

        selectedBtn.classList.add("incorrect");
        audioInorrect.play();

    }
 
   Array.from(answerButton.children).forEach(button =>{ 

    if(button.dataset.correct === "true"){

        button.classList.add("correct");
        

    } 
    button.disabled = true;

   });


   nextButton.style.display = "block";

   
}

function showScore(){

   resetState();
   questionElement.innerHTML = `¡You scored ${score} out of ${questions.length}!`;
   
   
    
        tryAgainButton.innerHTML = "Play Again";
        tryAgainButton.classList.add("tryAgain");
        answerButton.appendChild(tryAgainButton);
        imageElement.style.display = "none";
        questionElement.classList.add("questionQuizGame2");




}

function handleNextButton(){

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
       
       
        showQuestion();
         
    }else{

        
        showScore();
        

    /*

        

        tryAgainButton.addEventListener("click", startQuiz())
        

    */

        
    }
    


}

 nextButton.addEventListener("click", function(){

   if(currentQuestionIndex < questions.length){
    nextButton.style.display = "none";
    
    
    handleNextButton();
 }else{
    
    startQuiz();

 }
}

)


function resetState(){

    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }


};



tryAgainButton.addEventListener("click", function(){

    location.reload();


})

starQuiz();



    
