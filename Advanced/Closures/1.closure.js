const text = 'hello';

function func() {
    console.log(text);
}
func();

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }

    // inner();
    return inner;
}

// outer();
const func1 = outer();// inner 함수의 참조 값만 반환해도 그 inner함수가 가지고있는 렉시컬 환경도 같이 반환되기때문에
                    // 반환되는 참조값에서도 inner 함수의 외부함수인 outer의 변수에 접근이 가능하다.
func1();