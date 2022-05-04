// const multiple = {
//     [Symbol.iterator] : () => {
//         const max = 10;
//         let num = 0;
//
//         return {
//             next() {
//                 return {value: num++ * 2,done: num>max};
//             }
//         };
//     }
// };

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2 // 사용자가 원하는 타이밍에 return 해줌, 사용자가 원할떄까지 기다렸다가 다음꺼 줘 할떄 다음꺼 return 해줌
            // 즉 사용자가 next() 라는 함수를 호출할떄 가지 기다림
        }
    } catch (error){
        console.log(error);
    }

}

const multiple = multipleGenerator();
console.log(multiple); //Object [Generator] {}
let next = multiple.next();
console.log(next);

// multiple.return(); // 종료해!
multiple.throw('Error!'); // 에러를 던질수 있음

next = multiple.next();
console.log(next);