function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('apple');
        }, 1000);
    })
}

function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('banana');
        }, 3000);
    })
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나 와 사과를 같이 가지고 오기
getApple()
    .then((apple) =>
        getBanana().then((banana) => [apple, banana])
    ).then(console.log);

//Promise . all 병렬적으로 한번에 모든 Promise 들을 실행
Promise.all([getApple(), getBanana()])
    .then(fruits => console.log('all',fruits));

// Promise . race 주어진 Promise 중에 제일 빨리 수행된것이 이김!!
Promise.race([getApple(), getBanana()])
    .then(fruits => console.log('race',fruits));

Promise.all([getApple(), getBanana(),getOrange()])
    .then(fruits => console.log('all-error',fruits))
    .catch(console.log);

// Promise.allSettled 병렬적으로 한번에 모든 Promise 들을 실행, 단 성공 실패 결과를 모두 받아옴
Promise.allSettled([getApple(), getBanana(),getOrange()])
    .then(fruits => console.log('all-settle',fruits))
    .catch(console.log);