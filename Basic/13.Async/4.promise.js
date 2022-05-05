function runInDelay(seconds) {
   return new Promise((resolve, reject)=>{
       if (!seconds || seconds < 0) {
           reject(new Error('seconds 가 0 보다 작음'));
       }
       setTimeout(resolve, seconds * 1000);
   });

}

// runInDelay(2)
//     .then(필요한일을 수행)
//     .catch(에러를처리)
//     .finally(최종적으로 무조건 호출)

runInDelay()
    .then(() => console.log('타이머 완료!'))
    .catch(console.error)
    .finally(() => console.log('끝났다!!'));