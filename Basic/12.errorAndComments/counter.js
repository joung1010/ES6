 // export let count = 0;   변수 앞에도 사용 가능
 let count = 0;
//export  default : 해당 모듈에서 딱 하나만 export 할때 사용
//여러가지를 export 할꺼라면 사용할 수 없다.

export  function increase() {
    count++;
    console.log(count)
}

export function getCount() {
    return count;
}