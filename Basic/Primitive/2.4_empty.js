// null , undefined

let variable ;
console.log(variable);

variable = null;
console.log(variable);

// undefined : 변수에 값이 할당되지 않은 상태 즉 값이 있는지 없는지 모르는 상태, 메모리에 아무것도 들어가 있지 않음
// null : 변수가 비어있는 상태 , 변수에 값이 없는 상태

let activateItem; // 아직 활성화된 아이템이 있는지 없는지 모른느 상태태
activateItem = null ; //활성화된 아이템이 없는 상태

console.log(typeof null); //type : object 즉 javascript 자체에서 null을 표현할때 object를 만들어서 표현
                        // 메모리에 null 이라는 object 가 할당되어서 들어가짐
console.log(typeof undefined); // type : undefined
