
***
## Iteration 반복 순회
Iteration Protocol(이터레이션 프로토컬) 반복가능한 인터페이스   
Iterable (순회가능) : 주로 형용사 형식의 이름은 인터페이스   
그래서 특정한 object 가 iterable protocol 을 준수한다면
<pre>
이런 규격 사항을 따라야한다.
<code>
[Symbol.iterator](): IterableIterator< T >;
</code>
</pre>
즉 해당 object 안에 iterator 라는 함수가 존재 해야하고 이함술를 호출 했을때 IterableIterator 반환해야함   
