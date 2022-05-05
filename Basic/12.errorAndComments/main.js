//export default 1나만 외부로 노출하기 떄문에 원하는 이름으로 받아올 수 있다.
// export 된 파일이라면 {}안에 똑같은 이름으로 받아 와야한다.
// 이름을 바꾸고 싶다면 뒤에 as를 통해서 변경

// import {increase as  increase1} from './counter.js'
// import {increase ,getCount} from './counter.js'
import * as counter from './counter.js'

// increase();
// increase();
// increase();
// const count = getCount();
// console.log(count);

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());