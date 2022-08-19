const inputs = document.querySelectorAll(".inputs");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");


function calculateArea(base,height){

    const area = (base*height)/2;
        return area;
  
}


function findArea(){

    const area = calculateArea(Number(inputs[0].value),Number(inputs[1].value));

        output.innerText = "the area of the triangle is  " + area + " cm²";

}

checkBtn.addEventListener("click", findArea);