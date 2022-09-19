# Regex(Regular Expression)  
텍스트에서 우리가 원하는 특정한 패턴을 찾을 때 유용  
/regex?/i : /슬래쉬를 이용해서 정규표현식을 나타내주고 // 안에 찾고자하는 패턴을작성하고 마지막에 flag를통해 옵션을활용할 수 있다.  
연습용 사이트: [regexr.com/5mhou](https://regexr.com/5ml92)  
    
## 문법정리

### Groups and ranges

| Character | 뜻                                     |
| --------- | -------------------------------------- |
| `\|`      | 또는                                   |
| `()`      | 그룹                                   |
| `[]`      | 문자셋, 괄호안의 어떤 문자든           |
| `[^]`     | 부정 문자셋, 괄호안의 어떤 문가 아닐때 |
| `(?:)`    | 찾지만 기억하지는 않음                 |  
  
```
예제 :Hi there, Nice to meet you. And Hello there and hi.
I love grey(gray) color not a gry, graay and graaay.
Ya ya YaYaYa Ya
```
```
/Hi|Hello/gm : 위의 예제에서 Hi와 Hello가 찾아짐
/(Hi|Hello)/gm : 위의 예제에서 Hi와 Hello가 찾아지는데 gruop1 : # Hi, gruop1 : # Hello 
/(Hi|Hello)/gm : 위의 예제에서 Hi와 Hello가 찾아지는데 gruop1 : # Hi, gruop1 : # Hello 
/(Hi|Hello)|(And)/gm : {gruop 1: Hi,gruop 2 : undefined},{gruop 1: Hello,gruop 2 : undefined},
{gruop 1: undefined,gruop 2 : And} 이런 형로 해당 ()그룹에 맞는 곳에 그 값이 match된다.

/gr(?:a|e)y/gm : gray, grey가 match되는데 이때 따로 group이라는 데이터를 만들고싶지 않을때 ?:사용
/(gr[aed]y/gm  : gray,grey,grdy (a|e|d) 이런형식으로 그룹으로 묶어도 되지만 []안에 문자열집합체를 입력해주면
해당 [] 안에 있는 문자열을 하나라도 만족하는 것을 찾을때 사용
/(gr[a-f]y/gm : [a-f] a에서 f 까지 : a,b,c,d,e,f
[a-zA-z0-9] : a~z까지 A~Z까지 0~9까지
/[^a-zA-z0-9]/gm : a~z까지 A~Z까지 0~9까지를 제외한 것을 찾음 : , . 공백
```

### Quantifiers

| Character   | 뜻                                  |
| ----------- | ----------------------------------- |
| `?`         | 없거나 있거나 (zero or one)         |
| `*`         | 없거나 있거나 많거나 (zero or more) |
| `+`         | 하나 또는 많이 (one or more)        |
| `{n}`       | n번 반복                            |
| `{min,}`    | 최소                                |
| `{min,max}` | 최소, 그리고 최대                   |  
  
```
예제 :Hi there, Nice to meet you. And Hello there and hi.
I love grey(gray) color not a gry, graay and graaay.
Ya ya YaYaYa Ya
```
```
/gra?y/gm : 특정문자열 앞에? 는 ?뒤에 문자가 있거나 없거나를 의미 gray, gry
/gra*y/gm : 특정문자열 앞에* 는 *뒤에 문자가 있거나 없거나, 많거나 를 의미 gray, gry, graay,graaay
/gra+y/gm : 특정문자열 앞에+ 는 +뒤에 문자가 하나 있거나 혹은 그이상 있는 것을 의미 gray, graay, graaay
/gra{2,3}y/gm : 특정문자열 앞에 {}로는 뒤에 문자가 n번반복{2}:graay, 최소{2,}반복 graay,graaay 최소최대{2,3}graay,graaay

```

### Boundary-type

| Character | 뜻               |
| --------- | ---------------- |
| `\b`      | 단어 경계        |
| `\B`      | 단어 경계가 아님 |
| `^`       | 문장의 시작      |
| `$`       | 문장의 끝        |  
  
```
예제 :Hi there, Nice to meet you. And Hello there and hi.
I love grey(gray) color not a gry, graay and graaay.
Ya ya YaYaYa Ya
```
```
/\bYa/gm: 특정한 문자열이 있을때 단어앞에서만 사용하는 문자열을 선택하고 싶을때 \b Ya(이부분) ya Ya(이부분)YaYa Ya(이부분)
/Ya\b/gm: 특정한 문자열이 있을때 단어뒤에서만 사용하는 문자열을 선택하고 싶을때 \b Ya(이부분) ya YaYaYa(이부분) Ya(이부분)
/Ya\B/gm: /b반대로 행동 단어 뒤에서만 사용하는 문자만 제외  Ya ya Ya(이부분)Ya(이부분)Ya Ya
/^Ya/gm: 문장의 시작이 Ya로 시작하는것만 Ya(이부분) ya YaYaYa Ya
/Ya$/gm: 문장의 끝이 Ya로 시작하는것만 Ya ya YaYaYa Ya(이부분)
먄약 flag에서 m(multiline)을 빼면 가장 마지막에 Ya 선택됨

```

### Character classes

| Character | 뜻                           |
| --------- | ---------------------------- |
| `\`       | 특수 문자가 아닌 문자        |
| `.`       | 어떤 글자 (줄바꿈 문자 제외) |
| `\d`      | digit 숫자                   |
| `\D`      | digit 숫자 아님              |
| `\w`      | word 문자                    |
| `\W`      | word 문자 아님               |
| `\s`      | space 공백                   |
| `\S`      | space 공백 아님              |
