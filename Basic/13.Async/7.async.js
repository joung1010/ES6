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
//async 키워드가 있으면 그냥 값을 return 해도 promise 가 return 된다.
async function fetchFruits() {
    // promise 를 return 하는 함수는 await 라는 키워드를 통해서 resolve에 전달되는 값을 바로 변수에 할당 할 수 있다.
    const apple = await getApple();
    const banana = await getBanana();
    return [apple, banana];
}

fetchFruits()
    .then(fruits => console.log(fruits));