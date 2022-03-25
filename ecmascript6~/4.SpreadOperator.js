// Spread Opertor(스프레드 오퍼레이터, 스프레드 연산자.)  = 대괄호를 전부 제거해주는 역활 

// 배열
let array2= ['hello', 'world'];
console.log(array2); //['hello', 'world']
console.log(...array2); //hello world

// 변수
let letter= 'hello';
console.log(letter); //hello
console.log(...letter);//h e l l o 

// deep copy
var a = [1,2,3];
var b = [4,5];
var c = [...a, ...b];

c = [1,2,3,4,5]// (deep copy할떄 유용)

//등호로 복사를 하면 a와 b 변수는 [1,2,3]을 각각 따로 하나씩 가진게 아니라 값 공유가 일어난다
var a = [1,2,3];
var b = a;

// 객체 property copy
let o1 = { a : 1, b : 2};
let o2 = { a : 3, ...o1 };
console.log(o2);

// 이렇게 a라는 값이 중복이 발생하면  뒤에 오는 a로 적용
// 출력해보면 a : 1 이라는 자료가 담겨짐


// 함수 파라미터 넣을떄
function add(a,b,c){
   console.log(a + b + c)
}
let array= [10, 20, 30];
add(...array);  //요즘방식
add.apply(undefined, array); //옛날방식// add(array[0], array[1], array[2]); 