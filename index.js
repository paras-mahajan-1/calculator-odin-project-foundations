console.log("It's working");

function operate(firstValue, secondValue, operator) {
    if (operator === "+" ) return firstValue + secondValue;
    if (operator === "-" ) return firstValue - secondValue;
    if (operator === "*" ) return firstValue * secondValue;
    if (operator === "/" ) return firstValue / secondValue;

}

function calculator() {
    let resultant;
        let getInput = +prompt("Enter the first number");
        resultant = getInput;
    let holding;
    while (true) {

    let getOperator = prompt("Enter the operator");
    let getSecondInput = +prompt("Enter the next number");
    resultant = operate(resultant, getSecondInput, getOperator);

    if ((getOperator == "=") || (getSecondInput == "=")){
        break;
    }
    holding = resultant;
    console.log(holding);
}   
};

calculator();

// var value;

// window.addEventListener("click", )

// function eventFunction (event) {

// }



