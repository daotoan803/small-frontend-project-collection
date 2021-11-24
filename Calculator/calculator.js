class Calculator {
  constructor(outputElement) {
    this.output = outputElement;
    this.leftSide = "";
    this.rightSide = "";
    this.operator = "";
    this.isLeftSideHaveDecimal = false;
    this.isRightSideHaveDecimal = false;
    this.isJustCalculate = false;

    this.updateOutput = this.updateOutput.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.changeToOppositeValue = this.changeToOppositeValue.bind(this);
  }

  updateOutput() {
    this.output.textContent =
      this.leftSide + " " + this.operator + " " + this.rightSide;
  }

  inputValue(num) {
    if (Number.isNaN(num)) {
      throw new Error("Not a number");
    }
    if (this.isJustCalculate) {
      this.clear();
    }

    if (this.operator) {
      this.rightSide += num;
    } else {
      this.leftSide += num;
    }

    this.updateOutput();
  }

  addDecimal() {
    if (this.operator && !this.isRightSideHaveDecimal) {
      this.isRightSideHaveDecimal = true;
      this.rightSide += ".";
      this.updateOutput();
      return;
    }

    if (!this.isLeftSideHaveDecimal && this.leftSide) {
      this.isLeftSideHaveDecimal = true;
      this.leftSide += ".";
      this.updateOutput();
    }
  }

  setOperator(operator) {
    if (this.leftSide === "" || this.leftSide === "-") return;
    if (this.isJustCalculate) this.isJustCalculate = false;
    this.operator = operator;
    this.updateOutput();
  }

  changeToOppositeValue() {
    if (this.operator) {
      if (this.rightSide.includes("-")) {
        this.rightSide = [...this.rightSide].slice(1);
      } else {
        this.rightSide = "-" + this.rightSide;
      }

      this.updateOutput();
      return;
    }

    if (this.leftSide.includes("-")) {
      this.leftSide = [...this.leftSide].slice(1);
    } else {
      this.leftSide = "-" + this.leftSide;
    }

    this.updateOutput();
    return;
  }

  calculate() {
    const leftSide = Number(this.leftSide);
    const rightSide = Number(this.rightSide);
    let result = 0;
    switch (this.operator.toLowerCase()) {
      case "+":
        result = leftSide + rightSide;
        break;
      case "-":
        result = leftSide - rightSide;
        break;
      case "x":
        result = leftSide * rightSide;
        break;
      case "/":
        result = leftSide / rightSide;
        break;
      default:
        throw new Error("Invalid operator");
    }
    this.clear();
    this.leftSide = result;
    this.isJustCalculate = true;
    this.updateOutput();
  }

  clear() {
    this.leftSide = "";
    this.rightSide = "";
    this.operator = "";
    this.isLeftSideHaveDecimal = false;
    this.isRightSideHaveDecimal = false;
    this.isJustCalculate = false;
    this.updateOutput();
  }
}
