// Array and object destructing(배열 및 객체 비구조화)
// 비구조화를 통해 배열 또는 객체의 값을 새 변수에 더 쉽게 할당할 수 있습니다
// key값이 변수명이랑 똑같을떄
// this가 사용되는 객체는 구조분해 하면 x

// ES5 문법
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};
let famillyName = contacts.famillyName;
let name = contacts.name;
let myAge = contacts.age;
console.log(famillyName); // 이
console.log(name); // 영희
console.log(age); // 22

// ES6 문법
const contacts2 = {
	famillyName2: '이',
	name2: '영희',
	age2: 22
};
let { famillyName2, name2, age2 } = contacts2;
console.log(famillyName2); // 이
console.log(name2); // 영희
console.log(age2); // 22



const example = {a:123,b:{c:123,d:144}}
// const a = example.a
// const d = example.b.d
const {a,b:{d}} = example



// ES5 문법
var name_ = 'Kim';
var age_ = 30;
var obj = { name_ : name_, age_ : age_ }

// ES6 문법
var obj = { name_, age_ } //name : name 이렇게 key값과 value값이 동일하면 하나로 생략이 가능합니다. 



// 속성 이름과 동일하지 않은 변수를 할당하면 undefined가 반환됩니다.
//  예를 들어, 속성의 이름이 name이고 username 변수에 할당하면 undefined를 반환합니다.
// 그러나 변수의 이름을 바꾸려면 콜론을 사용하면 됩니다
const contacts3 = {
	famillyName3: '이',
	name: '영희',
	age: 22
};

let { famillyName3, name: ontherName, age } = contacts3;
console.log(ontherName);//영희

// 배열의 경우 객체와 동일한 구문을 사용합니다. 중괄호를 대괄호로 바꾸면됩니다.
const arr = ['광희', '지수', '영철', 20];
let [value1, value2, value3] = arr;
console.log(value1);// 광희
console.log(value2);// 지수
console.log(value3);// 영철

let [, , wow] = arr  //첫번째, 두번째를 빈값으로 선언
console.log(wow)  //영철


let [x,y, ,z] = arr 
console.log(x,y,z) //광희,지수,20 //자리가 같애야됨
