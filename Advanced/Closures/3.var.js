function loop() {
    const array = [];
    // var 과 let 의차이
    for (let i = 0; i < 5; i++) {
        array.push(function (){
            console.log(i);
        })
    }
    return array;
}

const array = loop();
array.forEach((func) => func());
// 1. 전역 스코프 렉시컬환경 생성
// 2. loop 렉시컬 환경 생성
// 3. for 문에 대한 렉시컬 환경 생성
// 4. push 안의 callback 함수 렉시컬 환경이 밖에 있는 for문의 렉시컬 환경을 참조
// 5. 그래서 반환된 배열은 i를 참조하는 함수들의 배열이 반환

//var는 블럭레벨 스코프가 적용하지 않아서 최종적인 var i = 5의 값만을 참조하게 된다.
// var 는 함수 스코프가 가지고 있어서 얼마나 많은 함수를 생성해도 공통된 var i 를 가리키고 있다 이는
// 함수 스코프라서 동일하게 하나의 변수로만 남아있다.
/*
* function loop() {
    const array = [];
    var i;  <- 이거 와 동일
    // var 과 let 의차이
    for ( i = 0; i < 5; i++) {
        array.push(function (){
            console.log(i);
        })
    }
    return array;
}
*
*
*
* */