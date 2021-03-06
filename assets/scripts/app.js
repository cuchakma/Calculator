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

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    let mathOperator;

    if( calculationType === 'ADD') {
        currentResult = currentResult +  enteredNumber;
        mathOperator = '+';
    } if( calculationType === 'SUBTRACT' ) {
        currentResult = currentResult -  enteredNumber;
        mathOperator = '-';
    } if( calculationType === 'MULTIPLY') { 
        currentResult = currentResult * enteredNumber;
        mathOperator = '*';
    } if( calculateResult === 'DIVIDE' ) { 
        currentResult = currentResult /  enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOuput(mathOperator, initalResult, enteredNumber );
    writeToLog( calculationType, initalResult, enteredNumber, currentResult );
}

/**
 * add function to add two numbers
 */

function add() {
    calculateResult('ADD');
}

/**
 * substract function to subtract two numbers
 */

function subtract() {
    calculateResult('SUBTRACT');
}

/**
 * multiply function to multiply two numbers
 */
function multiply() {
   calculateResult('MULTIPLY');
}

/**
 * divide function to divide two numbers
 */

function divide() {
    calculateResult('DIVIDE');
}

/**
 * Event Listenrs for all the buttons e.g - subtract, add, multiply,
 */
addBtn.addEventListener('click', add );
subtractBtn.addEventListener('click', subtract );
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);