console.log("It's working");

function calculator() {
    let counterVar = 0;
    let resultant;
    if (counterVar == 0) {
        let getInput = +prompt("Enter the first number");
        resultant = getInput;
    };
    let holding;
    while (true) {

    let getOperator = prompt("Enter the operator");
    let getSecondInput = +prompt("Enter the next number");
    

    if (getOperator === "+") {
        resultant = resultant + getSecondInput;
    };
    if (getOperator === "-") {
        resultant = resultant - getSecondInput;
    };
    if (getOperator === "*") {
        resultant = resultant * getSecondInput;
    };
    if (getOperator === "/") {
        resultant = resultant / getSecondInput;
    };
    if ((getOperator == "=") || (getSecondInput == "=")){
        console.log(holding);
        break;
    }
    holding = resultant;
    console.log(holding);
}   
};

calculator();








