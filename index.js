console.log("It's working");

// function operate(firstValue, secondValue, operator) {
//     if (operator === "+" ) return firstValue + secondValue;
//     if (operator === "-" ) return firstValue - secondValue;
//     if (operator === "*" ) return firstValue * secondValue;
//     if (operator === "/" ) return firstValue / secondValue;

// }

// function calculator() {
//     let resultant;
//         let getInput = +prompt("Enter the first number");
//         resultant = getInput;
//     let holding;
//     while (true) {

//     let getOperator = prompt("Enter the operator");
//     let getSecondInput = +prompt("Enter the next number");
//     resultant = operate(resultant, getSecondInput, getOperator);

//     if ((getOperator == "=") || (getSecondInput == "=")){
//         break;
//     }
//     holding = resultant;
//     console.log(holding);
// }   
// };

// calculator();

let displayScreen = document.body.querySelector(".screen");


let holdingValue = 0;
let holdingOperator = "";
let resultant = 0;
window.addEventListener("click", (event) => {
    
    targetValue = (event.target.closest("button"));
    if (!targetValue) return "";

    // if (holdingOperator == "+") {
    //     holdingValue = holdingValue + (targetValue.textContent);
    //     displayScreen.textContent = holdingValue;
    // };

    // if (!holdingOperator) {
    // holdingValue += targetValue.textContent;
    // displayScreen.textContent = holdingValue;
    // };
    // if (targetValue.textContent === "+"){
    //     holdingOperator = "+";

    // };

    // console.log(targetValue.textContent);
    
    // holding += targetValue.textContent;
    if (targetValue.textContent == "=") {
        // code block to calculate the string;
        displayScreen.textContent = "yeah";
    } else {
    holdingValue += targetValue.textContent;
    displayScreen.textContent = holdingValue;
    }
});





