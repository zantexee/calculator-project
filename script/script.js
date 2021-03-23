//Operate functions
const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const substractNumbers = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

const multiplyNumbers = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const divideNumbers = (firstNumber, secondNumber) => {
    if ((firstNumber / secondNumber).toString().length > 6)
        return (
            Math.round((firstNumber / secondNumber + Number.EPSILON) * 100) /
            100
        );
    return firstNumber / secondNumber;
};
const operate = (operator, firstNumber, secondNumber) => {
    if (operator === "+") return addNumbers(firstNumber, secondNumber);
    if (operator === "-") return substractNumbers(firstNumber, secondNumber);
    if (operator === "*") return multiplyNumbers(firstNumber, secondNumber);
    if (operator === "/") return divideNumbers(firstNumber, secondNumber);
};
const clear = (btnText) => {
    firstNumber = "";
    secondNumber = "";
    result = null;
    currentOperator = null;
    shownResult = false;
    if (btnText) return (display.textContent = "0");
    return (display.textContent = "");
};

const display = document.querySelector(".display");

let firstNumber = "",
    secondNumber = "",
    result = null,
    currentOperator = null,
    shownResult = false;

const buttonsArr = document.getElementsByClassName("btn");
[...buttonsArr].map((btn) => {
    if (btn.classList.contains("operator")) {
        //Check for "=" button
        if (btn.textContent === "=") {
            return btn.addEventListener("click", () => {
                if (!secondNumber) return;
                if (firstNumber === "" && display.textContent === "0")
                    firstNumber = "0";
                result = operate(
                    currentOperator,
                    parseFloat(firstNumber),
                    parseFloat(secondNumber)
                );
                firstNumber = result.toString();
                currentOperator = null;
                secondNumber = "";
                result = null;
                display.textContent = firstNumber;
                shownResult = true;
                console.log(
                    "current values",
                    result,
                    firstNumber,
                    secondNumber
                );
            });
        }
        //Operator buttons functionality
        btn.addEventListener("click", () => {
            if (currentOperator) {
                if (!secondNumber) return;

                result = operate(
                    currentOperator,
                    parseFloat(firstNumber),
                    parseFloat(secondNumber)
                );
                firstNumber = result.toString();
                secondNumber = "";
                result = null;
                console.log(
                    "current values",
                    result,
                    firstNumber,
                    secondNumber
                );
            }
            if (firstNumber === "" && display.textContent === "0") {
                firstNumber = "0";
            }

            display.textContent = display.textContent.concat(btn.textContent);
            currentOperator = btn.textContent;
        });
    } else {
        btn.addEventListener("click", () => {
            //Clear button functionality
            if (btn.textContent === "CLEAR") {
                clear(btn.textContent);
                return;
            }

            //Number keys functionality
            if (currentOperator) {
                display.textContent = display.textContent.concat(
                    btn.textContent
                );
                return (secondNumber = secondNumber.concat(btn.textContent));
            } else {
                if (firstNumber === "") display.textContent = "";
                if (shownResult) clear();
                display.textContent = display.textContent.concat(
                    btn.textContent
                );
                return (firstNumber = firstNumber.concat(btn.textContent));
            }
        });
    }
});
