// 기존 for-in 배열 순회 :
// 자기 자신에게는 없는 상위 프로토타입의 값도 포함될 수 있다는 문제가 있었다.
var data = ["irodog", "roodig"];
Array.prototype.getIndex = "godori";

for(let idx in data){
    console.log(data[idx]); // irodog, roodig, godori
}

// for of 순회 :
// index가 아닌 value 순회가 가능하므로 for-in과 같은 문제를 방지할 수 있다.
var data2 = ["irodog", "roodig"];
Array.prototype.getIndex = "godori";
    
for(let value of data2){
    console.log(value); // irodog, roodig
}