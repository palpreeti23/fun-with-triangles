const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAns = ['90°', 'right angled','Geometry','Scalene','Polygon',];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAns[index]){
            score = score + 1;
        }
        index = index + 1;
    }
 output.innerText = "your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);