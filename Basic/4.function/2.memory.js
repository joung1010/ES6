function add(num1, num2) {
    
    return num1 + num2;
}
// 우리가 정의한 함수는 Heap 영역 어디간에 저장되어있고
// 이함수 명 add 가 가리키는 것은 우리가 정의한 함수의 주소 값을 가리키고 있다.
// 즉 이 변수에는 우리가 정의한 함수의 주소값이 들어 있다.

const sum = add ; // add 가 가리키는 메모리 주소를 그대로 할당하는 것
// 즉 함수의 이름을 할당하는 것은 그 함수 가리키고 있는 메모리 주소를 복사해서 할당하는 것과 같다.
console.log(sum(1, 2));
console.log(add(1, 2));