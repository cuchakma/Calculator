const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOuput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult( currentResult, calcDescription );
}

function writeToLog( operationIdentifier, prevResult, operationNumber, newResult ) {
    const logEntry = {
        operation : operationIdentifier,
        prevResult: prevResult,
        number    : operationNumber,
        result    : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries)
    //console.log(logEntry.result);
}

function calculate(operation) {
    const enteredNumber = getUserInput();
    const initalResult  = currentResult;
    let operator;
    if( operation == 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if( operation == 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if( operation == 'MULTIPLY' ) {
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteOuput(operator, initalResult, enteredNumber );
    writeToLog(operation, initalResult, enteredNumber, currentResult);
}

/**
 * Event Listeners for all the buttons e.g - subtract, add, multiply,
 */
addBtn.addEventListener('click', calculate.bind(this, 'ADD') );
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT') );
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE') );