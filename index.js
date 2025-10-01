console.log("It's working");

function add (value1, value2) {
    return value1 + value2;
};

function substract (value1, value2) {
    return value1-value2;
};

function multiply (value1, value2) {
    return value1*value2;
};

function divide (value1, value2) {
    if (value2 == 0) {screen.textContent = Error("please enter correct value");}
    return value1/value2;
};

let number1 = 0;
let number2 = 0;
let operator = "";

function operate(value1, value2, operator) {
    
    if (operator == "+") return add(value1, value2);
    if (operator == "-") return substract(value1, value2);
    if (operator == "/") return divide(value1, value2);
    if (operator == "*") return multiply(value1, value2);
};

let screen = document.querySelector(".screen");

let holdingFirstValue = 0;
let holdingSecondValue = 0;

function numberTester(value) {
    if (typeof(value) == 'number') {
        return true;
    }
}
function removingLastValue(string) {
    let stringArr = string.split("");
    if (!stringArr) return 0;
    let len = string.length;
    stringArr.length = len - 1;
    return stringArr.join("")
};
// console.log(removingLastValue("1234"));

window.addEventListener("click", event => {
    let holding = 0;
    let targetValue = event.target.closest("button");
    if (!targetValue) return "";
    if (targetValue.textContent == "clear") {holdingFirstValue = 0; holdingSecondValue = 0; operator = ""; screen.textContent = "";};
    
    if ((targetValue.textContent == "+" ) || (targetValue.textContent == "-" ) || (targetValue.textContent == "*" ) || (targetValue.textContent == "/" )) {operator = targetValue.textContent; screen.textContent = targetValue.textContent;}
    else if (targetValue.textContent == "=") {
        holding = operate(+holdingFirstValue, +holdingSecondValue, operator);
        holdingFirstValue = holding;
        holdingSecondValue = 0;
        operator = "";
        screen.textContent = holding;
    }
    else if ((!number1) && !operator) {if (((operator == "+" ) || (operator == "-" ) || (operator == "*" ) || (operator == "/" ))) {number1 = 1}; holdingFirstValue += targetValue.textContent; number1 = 0; screen.textContent = holdingFirstValue; if (holdingFirstValue.includes("clear")) {holdingFirstValue = 0}
    
} 
    else if (!number2) {holdingSecondValue += targetValue.textContent; number2 = 0; 
        screen.textContent = holdingSecondValue;
    }
    else if (targetValue.textContent == "clear") {holdingFirstValue = 0; holdingSecondValue = 0; operator = ""}

});



