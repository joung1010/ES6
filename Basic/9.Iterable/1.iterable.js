// Iterable 하다는건 ! 순회가 가능하다는 것!
// [Symbol.iterator]() : IterableIterator<T> ;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T> 리턴한다는 것은
// 순회 가능한 객체다! 라는 것을 의미
// 순회가 가능하면 무엇을 할 수 있나??
// 바로 ! 빙글빙글 도는 반복문, 연산자들을 사용할 수 있다.

const array = [1, 2, 3];
// values(): IterableIterator<T>; <-IterableIterator<T> return 함
console.log(array.values()); //Object [Array Iterator] {}
console.log(array.entries());//Object [Array Iterator] {}
console.log(array.keys());//Object [Array Iterator] {}

//iterator 사용해보기
const iterator = array.values();
while (true) {
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}
// 1. const iterator = array.values(); <- values 가 IterableIterator return함
// 2. IterableIterator 는 Iterator를 상속 받는다
// 3. Iterator는 내부로 next , return , throw 라는 함수가 있다
// 4. 이 각각의 함수는 다시 IteratorResult 를 반환한다.
// 5. 그래서 Iterator 의 next () 함수를 호출해야만 다음으로 순회한다.
// 6. IteratorResult 는 done 과 value 라는 속성을 가지고 있다.
// 7. value는 직접적인 값을, done은 마지막이 item 이라면 true 라는 값을 가진다.



for (let item of array.values()) {
    console.log(item);
}// 1 , 2, 3

// 일반 객체는 iterable 하지 않다
const obj = {id: 123, name: 'mason'};
/*for (let item of obj) {
    console.log(item);
}*/
for (let key in obj) {
    console.log(key);
}