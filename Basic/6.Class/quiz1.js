// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
    #value;
    constructor(startNum) {
        if (isNaN(startNum) || startNum < 0) {
            this.#value = 0;
        } else {
            this.#value = startNum;
        }
    }

    increment = ()=>{
        this.#value++;
    }

    get value() {
        return this.#value;
    }
}

const counter = new Counter(-1);
counter.increment();
counter.increment();
console.log(counter.value);
