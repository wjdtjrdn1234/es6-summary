//1. var (재선언,재할당,범위:function)
var 나이;
var 나이;

var variable = 'a';
console.log(variable); //a
var variable = 'b';
console.log(variable); //b

function 함수(){
    var 이름 = 'Kim';
    console.log(이름); //가능
  }
console.log(이름); //에러

// 2. let (재선언 불가능, 재할당 가능,범위:{})
let 나이;
let 나이;//에러

let variable = 'a'; 
console.log(variable); //a
variable = 'b'; 
console.log(variable); //b

if ( 1 == 1 ){
    let 이름 = 'Kim';
    console.log(이름); //가능
  }
console.log(이름); //에러

// 3. const (재선언 불가능, 재할당 불가능,범위:{})
const 나이2;
const 나이2;//에러

const 오브젝트 = { 이름 : 'Kim' }
오브젝트.이름 = 'Park'; //오브젝트는 가능 

const variable = 'a'; 
console.log(variable); //a
varable= 'b'; 
console.log(variable); //에러


//호이스팅:
// var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.
// 자바스크립트는 ES6에서 도입된  모든 선언(var, function, function*, class)을 호이스팅한다.

 

// 하지만,  let,const 변수는 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
console.log(foo); // undefined
var foo;
console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;

// 참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데
// var 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.
// let,const 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

 

// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

console.log(foo); // undefined
var foo;
console.log(foo); // undefined
foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

 

 

 

 

 

