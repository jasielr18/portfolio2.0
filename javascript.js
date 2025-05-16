/*
  
/ THIS IS THE CALCULATOR THAT IM TRYING TO DO BY USING HTML, CSS AND JS/ 
let resultado = document.getElementById('resultado');
let opciones = document.getElementById('opciones');


let valor1 = document.getElementById('valor1');
let valor2 = document.getElementById('valor2');

if(opciones = 1){

    resultado = valor1 + valor2;
    console.log(resultado);
};


/////////////////////////////////// THESE ARE EXERCISES TO PRACTICE DOING OBJECTS /////////////////////////////////////


// ***** EXERCISE 1: Create and Access Object Properties *****

// Here i created the object "book" with a couple of properties, and then i print them in the console.
let book = {
   
    title: 'Biografia personal  ',
    author:'Jasiel Ramirez',
    year: 2040,
    genre: 'Biografia/historia', 


};

console.log('Title: ' + book.title);
console.log( 'Author: ' + book.author );
console.log('Year: ' + book.year);
console.log('Genre: ' + book.genre);

// ***** EXERCISE 2: Add and Update Object Properties *****

// Here i created a object called "person", with a couple of properties

let person = {
  
    name: 'Pedro',
    age: 23,

};

// Here i did adda new propertiy to the object "person".
person.email = 'pedronavaja@gmail.com';

// And here i edited the property "age" and print it in the console.

person.age = 38;

console.log(person);

// ***** EXERCISE 3: Nested Objects ***** 


// Here i created an object name "car".
let car = {

    make: 'Chevrolet',
    model: 'Camaro',
    year: 2020,
    
    // Here i created an object inside an object, also called "Nested object" which we named it "owner".
    owner: {

        name: "Jasiel",
        contact: "8095632032",

    }

};

/* And here we did called the object "car", then we went for the object inside, which it was called "owner", 
and finally we went straithg to the prpeties inside it. 

console.log(car.owner.name);
console.log(car.owner.contact);

//  ***** EXERCISE 4: Iterating Over Object Properties *****

// Here i created an object called "Student".
let student = {

    name: 'Pedro',
    age: 14,
    grades: [0,1,2,3],

};

/* Here i did a 'For...in' loop, i created a variable called "variable", which contain the propertie 
names inside the object called "student" that is going to print every property name with the property value on its side. 

for (let variable in student ){

    console.log(`${variable}: ${student[variable]}`);

};

// EXERCISE 5: Object Methods

/* Here i created an object called "calculator with two methods, one for sum that is called "add"
and one for substract, that is called "substract"  

let calculator = {

    add(a,b){

      return a + b

    },

    substract(a,b){

        return a - b
    }

};

/* Here i print in the console, the sum of two number that i added by calling the object "calculator",
then, calling the function "add", and assign two numbers to the paramerets 'a' and 'b', so they 
were going to be sum, and after that i did the same process with the method called "substract"  

console.log(`The total sum is: ${calculator.add(5,5)} `);
console.log(`The total substract is: ${calculator.substract(25,7)} `);


// EXERCISE 6: Object Destructuring

// Here i created an object called 'Movie', with three propeties.

Movie = {
  
    title: 'Kill bill',
    director: 'Quentin tarantino',
    year: 2023

};

/* Then, here i created which is call 'Destructuring' that it will help me to bring 
two of the propeties in the object named 'Movie', so it's easier to print it

let {title, director} = Movie;

console.log('Movie title: '+title);
console.log('Movie director: '+director);


// ***** EXERCISE 7: Merging Objects ***** 

/* This time i created to objects with different propeties 

Address1 = { 

    Street: '8574 Selby St',
    city: 'Fairport',
    
};

Address2 = {
    
    State: 'NY' ,
    zipCode: 14450,
   
};

/* Here i created a new object called 'fullAdress' and in the i did the process to merge 
the two objects created before, (Address1 and Address2) 

let fullAddress = {...Address1, ...Address2};

console.log(fullAddress);


                //////////////////////////////// END OF THE OBJECTS PRACTICE ///////////////////////////////////////////
               
               
console.log('**** Arithmetic Operators ****');
console.log('');

  let a = 5;
  let b = 7;

/* "++a" In this example the system is going to increment the by 1 the variable 'a' and then is going
 show it in the console / and in this one 'a++' is going to show the value that is in the variable
 'a' and then is going to increment it by 1

console.log(++a);
console.log(a++);
console.log(a);

*/

/* ////////////////////////////////////////////////////////  CALCULATOR   ///////////////////////////////////////////////////////  */

const display = document.getElementById("display");


function addToDisplay(input) {
    
    display.value += input;
    
};

function clearDisplay(){

   display.value = "";


};


function calculate(){

    try{

        display.value = eval(display.value);

    }
    catch{
      
        display.value = "Error";

    }
     

};

/*

////////////////////////////////////  POMODORO TIMER ////////////////////////////////////

function startTimer() {
    setInterval(function() {
      time++;
      console.log(`Time: ${time} seconds`);
    }, 1000); // Updates every 1 second (1000 milliseconds)
  }
  startTimer()

*/



const audio = new Audio('');
audio.src = "./Sonidos/219069__annabloom__click1.wav";

const ringTone = new Audio('');
ringTone.src = "./Sonidos/Ringtone-foofaraw.wav";

let startButton = document.getElementById('startButton');
let countDown = document.getElementById('countDown');



countDown.innerHTML = "25:00";

const durations = {
    pomodoro: 25 * 60,    // 25 minutos
    shortBreak: 5 * 60,   // 5 minutos
    longBreak: 15 * 60    // 15 minutos
};

let currentMode = 'pomodoro'; // Modo inicial
let time = durations[currentMode];
let intervalId = null;
let isRunning = false;





startButton.addEventListener('click', function() {
    // Si el contador ya terminó, reseteamos el tiempo
    if (time <= 0) {
        time = startingMinutes * 60;
    }
    
    if (!isRunning) {
        // Inicia el temporizador
        startButton.innerHTML = "Pause";
        startButton.classList.add('pressed');
        intervalId = setInterval(updateCountdown, 1000);
        isRunning = true;
    } else {
        // Pausa el temporizador
        startButton.innerHTML = "Start";
        startButton.classList.remove('pressed');
        clearInterval(intervalId);
        isRunning = false;
    }
});

let repeatCount = 0;
const maxRepeats = 3;
ringTone.addEventListener('ended', () => {
    repeatCount++;
    if (repeatCount < maxRepeats) {
        ringTone.currentTime = 0; // Reinicia el audio al inicio
        ringTone.play();
    }
});

function updateCountdown() {
    // Si el tiempo ha llegado a 0, actualizamos el display y detenemos el intervalo.
    if (time === 0) {
        countDown.innerHTML = "0:00";
        clearInterval(intervalId);
       // alert(`El ${currentMode} ha terminado!`);
       ringTone.play();



      
       startButton.classList.add('pressed');
        startButton.innerHTML = "Start";
        isRunning = false;
    } else {
        // Actualizamos el display y luego decrementamos el tiempo.
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        countDown.innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        time--;
    }
}

////////////////////////// POMODORO - SHORT BREAK - LONG BREAK //////////////////////////////

let pomodoroButton = document.getElementById('pomodoro')
let shortBreakButton = document.getElementById('shortBreak')
let LongBreakButton = document.getElementById('longBreak')

pomodoroButton.classList.add('pressed');

pomodoroButton.addEventListener('click', function(){

    ringTone.pause();  
    ringTone.currentTime = 0;  

clearInterval(intervalId);
 pomodoroButton.classList.add('pressed');
 shortBreakButton.classList.remove('pressed');
 LongBreakButton.classList.remove('pressed');
 

 clearInterval(intervalId);
   countDown.innerHTML = "25:00" 
   startButton.innerHTML = "Start";
   startButton.classList.remove('pressed');
   isRunning = false;
    currentMode = 'pomodoro';
    time = durations[currentMode];
    
    
    
    
})


shortBreakButton.addEventListener('click', function(){
    
    ringTone.pause();  
ringTone.currentTime = 0;  
    shortBreakButton.classList.add('pressed');
    pomodoroButton.classList.remove('pressed');
    LongBreakButton.classList.remove('pressed');
        
    clearInterval(intervalId);
   countDown.innerHTML = "05:00" 
   startButton.innerHTML = "Start";
   startButton.classList.remove('pressed');
   isRunning = false;
    currentMode = 'shortBreak';
    time = durations[currentMode];

})

LongBreakButton.addEventListener('click', function(){

    ringTone.pause();  
ringTone.currentTime = 0;  
    LongBreakButton.classList.add('pressed');
    shortBreakButton.classList.remove('pressed');
    pomodoroButton.classList.remove('pressed');
    clearInterval(intervalId);
    countDown.innerHTML = "15:00" 
    startButton.innerHTML = "Start";
    startButton.classList.remove('pressed');
    isRunning = false;
    currentMode = 'longBreak';
    time = durations[currentMode];


})

function updateCountdown() {
    // Si el tiempo ha llegado a 0, actualizamos el display y detenemos el intervalo.
    if (time === 0) {
        countDown.innerHTML = "0:00";
        document.title = "⏰ ¡Tiempo terminado!";
        clearInterval(intervalId);
        ringTone.play();

        startButton.classList.add('pressed');
        startButton.innerHTML = "Start";
        isRunning = false;
    } else {
        // Convertir los segundos restantes en minutos y segundos
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        // Actualizar la pantalla y el título de la pestaña
        countDown.innerHTML = formattedTime;
        document.title = ` ${formattedTime} - Pomodoro`;

        // Disminuir el tiempo restante
        time--;
    }
}

