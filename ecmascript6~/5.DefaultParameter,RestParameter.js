//Default parameters : 파라미터에 값지정

function showMessage( message, from='unkown' ){
  console.log(`${message} by {$from}`);
}
showMessage('hi')

 
function temp(){
  return 10 
}

function add(a, b = temp() ){
  console.log(a + b)
}

//Rest parameters:파라미터값을 배열로
// 장점: 파라미터가 몇개오는지 미리안정해도 됨
function printAll( ...args ) {   //배열형태로 파라미터가 전달 -> ['seok' , 'woo' , 'jjang']
for(let i =0; i<args.length; i++){
    console.log(arg[i]);
}
}
printAll('seok','woo','jjang')
// 출력:
// seok
// woo
// jjang

// args.forEach((arg) => console.log(arg)) 또는
// for(const arg of args) {
//    console.log(arg);
// }
// 표현도 가능하다 

function fun2(a, b ,...parameter){
  console.log(parameter)
}
fun2(1,2,3,4,5,6,7); //[3,4,5,6,7]

//function fun2(a, ...parameter, b){} //에러 :rest parameter는 항상 맨뒤에 써야됨
//function fun2(a, ...parameter, ...parameter2){} //에러:2개 이상 사용할 수 없습니다. 

 

//rest parameter: 파라미터 경우 : []로 씌움
//spread operator:나머지 경우: [],{}을 벋김

 

 

