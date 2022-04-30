// 정직원과 파트타임직원을 나태낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서읾, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원 8000 원

/*
// my version
class Employeer {
    constructor(name, department, workTime) {
        this.name = name;
        this.department = department;
        this.workTime = workTime;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get workTime() {
        return this._workTime;
    }

    set name(name) {
        this._name = name;
    }

    set department(department) {
        this._department = department;
    }

    set workTime(workTime) {
        this._workTime = workTime;
    }

    getSalary(payment) {
        return this.workTime * payment;
    }
}

class FullTimeEmployee extends Employeer {
    #payment = 10000;

    constructor(name, department, workTime) {
        super(name, department, workTime);
    }

    get payment() {
        return this.#payment;
    }

    set payment(payment) {
        this.#payment = payment;
    }

    getSalary() {
        return super.getSalary(this.#payment);
    }
}

class PartTimeEmployee extends Employeer {
    #payment = 8000;

    constructor(name, department, workTime) {
        super(name, department, workTime);
    }

    get payment() {
        return this.#payment;
    }

    set payment(payment) {
        this.#payment = payment;
    }

    getSalary() {
        return super.getSalary(this.#payment);
    }
}

const fulltime = new FullTimeEmployee('mason', 'Enginerr', 120);
const partime = new PartTimeEmployee('hwan', 'casher', 60);

console.log(fulltime.getSalary());
console.log(partime.getSalary());
*/

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }

    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}


const mason = new FullTimeEmployee('mason', 'S/W', 30);
const bob = new PartTimeEmployee('bob', 'S/W', 20);

console.log(mason.calculatePay());
console.log(bob.calculatePay());