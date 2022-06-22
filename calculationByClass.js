class SimpleCalc {
    constructor(num) {
        this.num = num;
    }

    mult(num1) {
        this.num *= num1;
        return this;
    }

    plus(num1) {
        this.num += num1;
        return this;
    }

    minus(num1) {
        this.num -= num1;
        return this;
    }

    divide(num1) {
        this.num /= num1;
        return this;
    }

    toString() {
        return this.num.toString();
    }
}

class ProgrammerCalc extends SimpleCalc {
    constructor(num) {
        super(num);
        this.num = num;
    }

    toString() {
        return this.num.toString(2);
    }
}

const simpleCalc = new SimpleCalc(8);
simpleCalc.mult(10);
simpleCalc.plus(2);
simpleCalc.minus(7);
simpleCalc.divide(5);
console.log(simpleCalc.toString()); // 15

const programmerCalc = new ProgrammerCalc(8);
programmerCalc.mult(10);
programmerCalc.plus(2);
programmerCalc.minus(7);
programmerCalc.divide(5);
console.log(programmerCalc.toString()); // 1111


// bonus yoxlama
const bonusCalc = new ProgrammerCalc(8);
bonusCalc.mult(10).plus(2).minus(7).divide(5);
console.log(simpleCalc.toString());
