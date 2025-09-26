console.log("It's working");


while (true) {
    let input = prompt("Enter the number!");

    if (!input) {
        break
    };

    let emptyArr = [];
    emptyArr.push(input);
    if ((emptyArr.length) == 1) {
        console.log(emptyArr[0]);
    };
    let counterVar = 0;
    if (typeof input === 'number') {
        counterVar = input;
    };

    let resultant = 0;
    
    if ((input === "+") || (input === "-") || (input === "*") || (input === "/")) {
        console.log("present")
    }
    

    
};










