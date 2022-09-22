const inputs = document.querySelectorAll(".inputs");
const calculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a,b){

    const sumOfSquares = a*a + b*b;
    return sumOfSquares;

}

function calculateHypotenuse(){

    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);

    output.innerText = "the length of the hypotenuse is " + lengthOfHypotenuse;

}


calculateBtn.addEventListener("click",calculateHypotenuse);