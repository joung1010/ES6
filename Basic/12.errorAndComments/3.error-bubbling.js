//Bubbling up, Propagation
function a() {
    throw new Error('error');
}

function b() {
    try {
        a();
    }catch (error){
        // console.log(error);
        console.log('음... 생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같아!! 던져');
        throw error;
    }

}

function c() {
    b();
}

try {
    c();
} catch (error){
    console.log('Catched!');
}
console.log('Done!');

// error 는 전파가 되기때문에 최종적으로 호출하는 곳에서 에러를 처리하거나
// 아니면 가장 가까운 곳에서 처리할 수도 있다.
// 만약 가까운곳에서 처리하면 최종 호출하는 함수에서는 catch 되지 않는 것을 볼 수 있다.