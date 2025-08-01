let display = document.getElementById("display");
let operant = document.getElementsByClassName("operant");

function appearInDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function negativeNum() {
  display.value *= -1;
}
function makeDecimal() {
  display.value *= 0.01;
}

function calculate() {
  try {
    let operator;
    let expression = display.value;
    let arr;

    if (expression.includes("+")) {
      operator = "+";
      arr = expression.split("+");
    } else if (expression.includes("-")) {
      operator = "-";
      arr = expression.split("-");
    } else if (expression.includes("*")) {
      operator = "*";
      arr = expression.split("*");
    } else if (expression.includes("/")) {
      operator = "/";
      arr = expression.split("/");
    }

    switch (operator) {
      case "+":
        display.value = parseFloat(arr[0]) + parseFloat(arr[1]);
        break;
      case "-":
        display.value = parseFloat(arr[0]) - parseFloat(arr[1]);
        break;
      case "*":
        display.value = parseFloat(arr[0]) * parseFloat(arr[1]);
        break;
      case "/":
        display.value = parseFloat(arr[0]) / parseFloat(arr[1]);
        break;
      default:
        display.value = "Try again";
        break;
    }
  } catch (error) {
    display.value = "Error";
  }
}
