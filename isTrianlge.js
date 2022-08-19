const angleValue = document.querySelectorAll(".angle-value");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){

    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;

}

function isTriangle(){
    
   const sumOfAngles = calculateSumOfAngles(Number(angleValue[0].value),Number(angleValue[1].value),Number(angleValue[2].value));

   if(sumOfAngles===180){
    output.innerText = "the angles form a triangle";
   }
   else{
       output.innerText = "the angles do not form a triangle";
   }
}


checkBtn.addEventListener("click", isTriangle)