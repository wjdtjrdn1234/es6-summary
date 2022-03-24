// Template literals

// 템플릿 리터럴은 표현식/문자열 삽입, 여러 줄 문자열, 문자열 형식화, 문자열 태깅 등 다양한 기능을 제공합니다.
// 템플릿 리터럴은 런타임 시점에 일반 자바스크립트 문자열로 처리/변환됩니다.
// HTML을 데이터와 결합해서 DOM을 다시 그려야 하는 일이 빈번하기 때문에, 템플릿을 좀 더 쉽게 편집하고 작성해야 할 필요가 있어서, 이러한 기능이 추가되었습니다.

// ES5
function myFunc1() {
	return '안녕' + name + '너의 나이는' + age + '살 이다!'; 
}

console.log(myFunc1('영희', 22));// 출력 => 안녕 영희 너의 나이는 22살 이다!

// ES6
const myFunc = (name, age) => {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`; 
};

console.log(myFunc1('영희', 22));// 출력 => 안녕 영희, 너의 나이는 22살 이다!


// Tagged Template literals
// 태그를 사용하면 템플릿 리터럴을 함수로 파싱 할 수 있다.
// 함수로 문자 해체분석기능을 만들어줄 수도 있습니다

var variable = 'son';

function analysis(letters, variable ){
  console.log(letters);
  console.log(variable );
}
analysis `안녕하세요 ${variable } 입니다`;
// 출력:
// ["안녕하세요" , "입니다"]
// son


function analysis(letters, variable , variable2){ //변수가 여러개인경우
 console.log(letters);
 console.log(variable);
 console.log(variable2);
}