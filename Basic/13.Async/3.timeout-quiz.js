// 주어진 seconds(초) 가 아니면 callbacxk 함수를 호출함
// 단, seconds 가 0 보다 작으면 에러를 던지자!!

function runInDelay(callback, seconds) {
    if (!callback) {
        throw new Error('callback 함수를 전달 해야 함');
    }
    if (!seconds || seconds < 0) {
        throw new Error('seconds 는 0보다 커야함');
    }
    setTimeout(callback, seconds * 1000);
}

try{
    runInDelay(() => console.log('타이머 완료!!'), -1);
}catch (error){
    console.log(error);
}
