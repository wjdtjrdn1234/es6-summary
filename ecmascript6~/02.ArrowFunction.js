// ES5
function myFunc(name) {
	return '안녕' + name;
}
console.log(myFunc('영희'));

// ES6 화살표 함수
const myFunc = (name) => {
	return `안녕 ${name}`;
}
console.log(myFunc('영희')); // 출력 => 안녕 영희

// 또는 화살표를 사용하거나 'return' 키워드를 사용하지 않아도 됩니다 // return을 명시하지 않았지만 같은 줄에 있다면 자동으로 return이 있다고 간주함(implicit return)
const myFunc = (name) => `안녕 ${name}`;

console.log(myFunc('영희')); // 출력 => 안녕 영희
//하지만 객체를 리턴할때는 소괄호 필수
const obj = (x,y)=>({x,y}) // const obj = (x,y)=> {return{x:x,y:y}}



// 또한, 화살표 함수를 map과 filter, reduce 등 내장 함수와 함께 사용할 수 있습니다.
// ES5
const myArrary = ['진수', '영철', '영희', 5];

let arr1 = myArrary.map(function(item) {
	return item;
});
console.log(arr1); // 출력 => (4) ["진수", "영철", "영희", 5]

// ES6
let arr2 = myArrary.map((item) => item);
console.log(arr2); // 출력 => (4) ["진수", "영철", "영희", 5]



// arrow function을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용합니다.
// 전통정식 함수선언식은 함수가 쓰인위치에 따라 this값이 변함

var 오브젝트1 = {
    함수 : function(){ console.log(this) }
  }
오브젝트1.함수() //오브젝트1

var 오브젝트2 = {
    함수 : () => { console.log(this) }
  }
  
  오브젝트2.함수()//window