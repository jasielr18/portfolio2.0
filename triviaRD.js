////////////////////////////////////  TRIVIA GAME  ////////////////////////////////////


// Here im creating an Array with a couple of objects which is going to save all of the questions, answers and if they are true or false 

const questions = [
    {
        question: "¿En qué año se proclamó la independencia de la República Dominicana?",
        image: "/Images/independenciaRD.webp",
        answers: [
            { text: "1821", correct: false },
            { text: "1844", correct: true },
            { text: "1865", correct: false },
            { text: "1856", correct: false }
        ]
    },
    {
        question: "¿Quién fue el líder del movimiento independentista dominicano La Trinitaria?",
        image: "/Images/La-Trinitaria.jpg",
        answers: [
            { text: "Pedro Santana", correct: false },
            { text: "Juan Pablo Duarte", correct: true },
            { text: "Ramón Matías Mella", correct: false },
            { text: "Francisco del Rosario Sánchez", correct: false }
        ]
    },
    {
        question: "¿Qué ocurrió el 27 de febrero de 1844?",
         image: "/Images/27DeFebrero.webp",
        answers: [
            { text: "La abolición de la esclavitud", correct: false },
            { text: "La anexión a España", correct: false },
            { text: "La proclamación de la independencia", correct: true },
            { text: "El nacimiento de La Trinitaria", correct: false }
        ]
    },
    {
        question: "¿Qué significó la Guerra de la Restauración (1863-1865)?",
        image: "/Images/restauracion.jpeg",
        answers: [
            { text: "La independencia de Haití", correct: false },
            { text: "Independencia tras anexión por España", correct: true },
            { text: "La fundación de la Trinitaria", correct: false },
            { text: "Una guerra civil por el poder", correct: false }
        ]
    },
    {
        question: "¿Dónde se disparó el trabucazo que marcó el inicio de la independencia?",
         image: "/Images/trabucazo.png",
        answers: [
            { text: "En la Puerta del Conde", correct: true },
            { text: "En Santiago", correct: false },
            { text: "En el Fuerte Ozama", correct: false },
            { text: "En Dajabón", correct: false }
        ]
    },
    {
        question: "¿Quiénes forman la trilogía de Padres de la Patria Dominicana?",
        image: "/Images/padresDeLaPatria.jpeg",
        answers: [
            { text: "Duarte, Luperón y Báez", correct: false },
            { text: "Duarte, Sánchez y Mella", correct: true },
            { text: "Sánchez, Santana y Báez", correct: false },
            { text: "Trujillo, Duarte y Mella", correct: false }
        ]
    },
    {
        question: "¿Qué país colonizó a la isla de La Española primero?",
        image: "/Images/española.jpg",
        answers: [
            { text: "Francia", correct: false },
            { text: "Inglaterra", correct: false },
            { text: "España", correct: true },
            { text: "Portugal", correct: false }
        ]
    },
    {
        question: "¿Cómo se llamó el primer asentamiento europeo permanente en América, fundado en territorio dominicano?",
        image: "/Images/laIsabela.jpg",
        answers: [
            { text: "La Isabela", correct: true },
            { text: "Santo Domingo", correct: false },
            { text: "San Cristóbal", correct: false },
            { text: "San Juan", correct: false }
        ]
    },
    {
        question: "¿Cuál fue la dictadura más larga en la historia de la República Dominicana?",
        image: "/Images/dictadura.jpeg",
        answers: [
            { text: "La de Pedro Santana", correct: false },
            { text: "La de Ulises Heureaux", correct: false },
            { text: "La de Rafael Leónidas Trujillo", correct: true },
            { text: "La de Joaquín Balaguer", correct: false }
        ]
    },
    {
        question: "¿Qué ocurrió el 30 de mayo de 1961 en la República Dominicana?",
        image: "/Images/banderaDominicana.webp",
        answers: [
            { text: "Se proclamó la independencia", correct: false },
            { text: "Se fundó la Trinitaria", correct: false },
            { text: "El asesinato de trujillo", correct: true },
            { text: "Se firmó la constitución", correct: false }
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



    