// [Symbol.iterator]() : IterableIterator<T> ;
// 0 부터 10 이하까지 숫자의 2배를 순회하는 이터레이터 (반복자) 만들기

const multiple = {
    [Symbol.iterator] : () => {
        const max = 10;
        let num = 0;

        return {
            next() {
                return {value: num++ * 2,done: num>max};
            }
        };
    }
};

for (const num of multiple) {
    console.log(num);
}