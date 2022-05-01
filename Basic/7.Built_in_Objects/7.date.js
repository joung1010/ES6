// UTC 기준 (협정 세계시, 1970년 1월 1 일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); //특정한 date 의 문자열을 표시해주면 밀리초 단위로 표시 가능

const now = new Date();
now.setFullYear(2023); //특정 년도 설정
now.setMonth(0);     // 특정 월 설정, 0(1월) 부터 시작
console.log(now.getFullYear());
console.log(now.getDate()); // 0 부터  시작
console.log(now.getDay());  // 0 일요일,  1 월요일
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // IOS 8601 형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));