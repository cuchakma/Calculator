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

/**
 * add function to add two numbers
 */

function add() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult = currentResult +  enteredNumber;
    createAndWriteOuput('+', initalResult, enteredNumber );
    writeToLog('ADD', initalResult, enteredNumber, currentResult);
}

/**
 * substract function to subtract two numbers
 */

function subtract() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult = currentResult -  enteredNumber;
    createAndWriteOuput('-', initalResult, enteredNumber );
    writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}

/**
 * multiply function to multiply two numbers
 */
function multiply() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult = currentResult *  enteredNumber;
    createAndWriteOuput('*', initalResult, enteredNumber );
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}

/**
 * divide function to divide two numbers
 */

function divide() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult = currentResult /  enteredNumber;
    createAndWriteOuput('/', initalResult, enteredNumber );
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

/**
 * Event Listenrs for all the buttons e.g - subtract, add, multiply,
 */
addBtn.addEventListener('click', add );
subtractBtn.addEventListener('click', subtract );
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);