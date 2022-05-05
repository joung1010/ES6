function execute() {
    console.log('1');
    setTimeout(()=>{
        console.log('2');
    },3000);
    console.log('3');
}
// 1 , 3 , 2 순으로 출력
// execute(); 함수를 호출하면 바로 1 이 출력되고 WebAPi 또는 NodeApi 한테 3초 뒤에 내가 전달 콜백 호출해줘 하고 전달
// 3을 출력하고 3초뒤에 우리가 전달한 콜백함수를 호출!
execute();