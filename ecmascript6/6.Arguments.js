// arguments
// arguments 객체는 모든 함수 내에서 이용 가능한 지역 변수입니다. arguments 객체를 사용하여 함수 내에서 모든 인수를 참조할 수 있으며, 
// 호출할 때 제공한 인수 각각에 대한 항목을 갖고 있습니다. 항목의 인덱스는 0부터 시작합니다


function arg(a,b,c){
  console.log(arguments)
}
arg(2,3,4); //[2,3,4]


function 함수(a,b,c){
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }
}
함수(2,3,4);
// 출력:
// 2
// 3
// 4

//arguments: 모든파라미터들을 []에 담음
//rest parameter 이자리에 오는 파라미터를 []에 담음