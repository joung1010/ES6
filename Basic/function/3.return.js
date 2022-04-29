function add(num1, num2) {
    return num1 + num2;
   // return undefined;
}
// return 따로 명시히지않으면 Javscript Engine 이 자동적으로  return undefined; 처리해준다.

const res = add(1, 2);
console.log(res);

// return 을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예 : 조건이 맞이 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!!
function print(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
}

print(12);
print(-12);