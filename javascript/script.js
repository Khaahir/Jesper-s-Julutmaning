import {quizQuestions } from "./questions.js"

let questionBox = document.getElementById("question-field")
let questionsOne = document.getElementById("question-one")
let questionsTwo = document.getElementById("question-two")
let questionsThree = document.getElementById("question-three")
let questionsFour = document.getElementById("question-four")
let startBtn = document.querySelector(".startBtn")
let questions = document.getElementById("questions");

let questionindex = 0
let points = 0

console.log(quizQuestions);

        
const updateQuestions = () =>{
    if(questionindex < quizQuestions.length){
        questionBox.innerText = quizQuestions[questionindex].question
        questionsOne.innerText = quizQuestions[questionindex].answerOpt[0]
        questionsTwo.innerText = quizQuestions[questionindex].answerOpt[1]
        questionsThree.innerText=quizQuestions[questionindex].answerOpt[2]
        questionsFour.innerText=quizQuestions[questionindex].answerOpt[3]
}else{
    questionBox.innerText = `Quiz over! You scored ${points} points.`;
    questionsOne.innerText = "";
    questionsTwo.innerText = "";
    questionsThree.innerText = "";
    questionsFour.innerText = "";
}
}


const quizzHandler = ()=>{
    questions.addEventListener("click",(e)=>{
        if(e.target.classList.contains("opt")){
            let correctIndex = quizQuestions[questionindex].correctAnswer.toLowerCase()
            console.log(correctIndex);
            if(e.target.innerText.toLowerCase() == correctIndex){
                points+=1
                console.log(points);
            }
            questionindex +=1
            updateQuestions()
        }   
    })
}
startBtn.addEventListener("click",()=>{
updateQuestions()
quizzHandler()
startBtn.classList.add("hidden")
})



console.log(quizQuestions.length);