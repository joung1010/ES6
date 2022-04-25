About Javascript Engine
=============
우리가 작성한 Javascript 가 동작하기 위해서는 브라우저 자체에 내장되어있는 자바스크립트 엔진이 필요
이 자바스크립트 엔진이 동작하는 시간 **런타임** 즉 동작하고 있는 과정에서   
코드를 한줄 한줄씩 읽어서 실행한다. --> **인터프리터**   
즉 인터프리터란 : 런타임시 한줄씩 코드를 번역해서 실행
  
+) 컴파일러와 인터프리터의 차이  
    : 컴파일러는 실행하기전에 모든 코드를 컴퓨터가 이해할 수 있는 언어로 변환  
&nbsp;&nbsp;&nbsp;하지만 인터프리터는 일단 실행을 하고 필요할때마다 한줄한줄씩 번역한다.  

그래서 컴파일러 언어는 실행하기전에 모든 코드를 컴파일링하기 때문에  
처음 컴파일링하는 단계에서 시간이 오래거린다는 단점이 있지만 한번 실행파일을 만들면 빠르게   
실행할 수 있다는 장점이 있다.  
반대로 인터프리터는 컴파일 과정을 거치지 않고 바로 실행하기 때문에 초반 실행속도는 빠르지만  
실행하고 있는 당시에 한줄 한줄 번역해야하기 때문에 실행 속도가 비교적 느릴 수 있다는 단점이 있다.


* **
## Javascipt Engine   

### IE --> Chakra 
### Edge --> V8 
### Chrome --> V8 
### safari --> Javascript Core 
### firefox --> SpiderMonkey 
### nodeJs --> V8 
   
***

## ECMAScript
Javascript 문법을 규격화, 표준사항을 명시   
ECMAScript 표준사항, 문법의 정의를 이용해서 코딩을 할때도 ECMAScript에 맞게    
Javascript로 코딩을 하고 Javascript Engine도 이에맞게 구현이 되어있기때문에 서로 호환되게 프로그래밍이    
가능하다.   
[WIKI ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)   
[버전별 문법 지원 현황 확인]( https://kangax.github.io/compat-table/es5/)

*** 
## Javascript   
자바스크립트는 가벼운 스크립팅 언어    
인터프리터를 이용해서 런타임시  코드를 한줄 한줄씩 번역해서 실행하는 언어   
일급함수를 가지고 있는 프로그래밍 언어   
웹페이지 뿐만아니라 브라우저 , 외부환경 노드Js 등과 같이 JS Engine 이 있는 어느 곳이든 실행 가능   
프로토타입 베이스 언어   
싱글 쓰레드, 동적으로 타입이 결정 되는 언어 

***
Node Js 설치 후 nodemon 오류   
> 문제점: ps1 파일을 로드할 수 없음 
>>1. Windows PowerShell을 관리자 권한으로 실행
>>2. get-help Set-ExecutionPolicy 입력
>>3. Set-ExecutionPolicy RemoteSigned 입력

참고 : https://velog.io/@rain98/%EA%B9%83%ED%97%88%EB%B8%8C-non-fast-forward-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0

