---
title: 파이썬으로 인터프리터 만들기 | 1 - 언어 문법 정하기
date: "2019-06-08T12:51:34Z"
---

![banner-image.png](python_interpreter_1.png)

이 글은 [velog](https://velog.io/@devonnuri/%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%84%B0%ED%94%84%EB%A6%AC%ED%84%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-%EC%96%B8%EC%96%B4-%EB%AC%B8%EB%B2%95-%EC%A0%95%ED%95%98%EA%B8%B0-ibjwmybtpj)에도 기고되어 있습니다.

> 저는 컴파일러론이나 오토마타 등을 공부한 적이 없는 학생입니다.. 이런 어려움과 삽질 과정이 있었다는 그런 모험기로 봐주시면 감사하겠습니다.

어느날, 프로그래머라면 한번쯤은 꿈꿔봤던 (저만 그런가요 ㅎㅎ..) 저만의 언어를 만들기 위해 이번에야말로 무언가를 만들어야 겠다는 생각이 들었습니다.

C나 C++은 정말 친해지고 싶지만 친해지기 힘들어서 문자열을 다루기 용이하고 다른 라이브러리 없이 많은 기능을 갖추고 있는 Python을 선택하기로 했습니다. 하지만, 컴파일러나 인터프리터를 구현하는 강의나 자료들은 많았지만, 파이썬으로 구현하는 것은 잘 볼 수 없었습니다. 그래서, Java나 C/C++로 된 소스들을 분석해서  이해한 뒤 Python으로 포팅하는 방식으로 진행했습니다.

문법을 소개하기 전, 저는 Python과 Javascript를 좋아해 많은 부분을 차용했습니다. 뿐만 아니라, Kotlin이나 Swift같은 언어에서 멋있는 문법들을 가져오다 보니 조금 이상해진 부분도 있네요.

또한, Class와 같은 객체지향적의 요소들은 최대한 배제하면서 진행할 예정입니다. 왜냐하면, 저는 요즘 Functional Reactive Programming Language에 관심이 많기 때문입니다. 😄

# 1. 기본 타입

```
Boolean: 참(true)과 거짓(false)로 이루어진 논리적인 요소를 뜻하는 타입
Null: null로만 이루어진 빈 값을 뜻하는 타입
Number: 숫자를 뜻하는 타입
String: 쌍따옴표("")와 따옴표('')로 감싸 문자열을 뜻하는 타입
```

# 2. 제어문
## 2.1. if 문
```
if condition {
    // If condition is true
} else if another_condition {
    // If condition is false and another_condition is true
} else {
    // If neither condition nor another_condition is false
}
```

## 2.2. while 문
```
while condition {
    // Repeat until condition is false
}
```

## 2.3. for 문
```
for variable in iterable {
    // Iterate the iterable, setting a element into the variable.
}
```

# 3. 함수

## 3.1 함수 선언
```
fun function_name(argument) {
    return return_value;
}
```

## 3.1 함수 호출
```
fun function_name(argument) {
    return return_value;
}
```

# 4. 변수
```
var variable_name = initial_value;
```

# 5. 연산자
## 5.1. 산수 연산자
* +: 덧셉
* -: 뺼셈
* *: 곱셈
* /: 실수 나눗셈
* %: 정수 나눗셈의 나머지

## 5.2. 논리 연산자
* ==: 같음
* !=: 다름
* <: 작음
* <=: 작거나 같음(이하)
* \>: 큼
* \>=: 크거나 같음(이상)