// Promise 개체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.
// 매개변수resolve 와 reject 는 함수로서 호출되면 promise 를 이행하거나 거부합니다. 
// 이 둘을 이용하여 비동기 작업이 모두 끝나면 resolve 를 호출해 이행하고, 중간에 오류가 생기면 reject 를 이용해 거부하게 됩니다.
// 우선 Promise 는 매개변수로 executor 를 받게 됩니다. executor 는 resolve 와 reject 인수를 전달할 실행함수입니다.

// 상태:
// pedding : 대기 상태로서 아직 resolve 할지 reject 할 지 결정되지 않은 초기의 상태입니다.
// fullfilled : 이행 상태로서 연산이 성공적으로 완료된 상태입니다.
// rejected : 거부 상태로서 연산이 실패한 상태입니

// executor 로 arrow function 을 사용했고 이는resolve 와 reject , 두 함수를 매개변수로 받습니다.
// 그 후 결과를 확인하면 아직 어느 것도 결정되지 않았으므로 pedding 상태입니다.
const promise = new Promise((resolve, reject)=>{});
console.log(promise);// Promise { <pending> }

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("resolve");
    }, 3000);
  });
  console.log(promise2);
  setInterval(()=>{
    console.log(promise2);
  }, 1000);
  /*
  Promise { <pending> }
  Promise { <pending> }
  Promise { <pending> }
  Promise { 'resolve' }
  Promise { 'resolve' }
  Promise { 'resolve' }
  */
//   Promise 의 then 과 catch

// then
// promise 가 종료가 되면 resolve 에 들어간 값을 받을 수 있습니다.
const promise3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("resolve");
  }, 3000);
});

promise3.then(value => console.log(value)); 
// 3초 후에 결과가 출력
// resolve


// catch
// 하지만 reject 된 경우에는 then 으로 받을 경우, 에러가 발생합니다.
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject("reject");
    }, 3000);
  });
  
promise4.then(value => console.log(value)); // UnhandledPromiseRejectionWarning: reject


// 이 때 catch 를 사용하여 에러를 잡아줄 수 있습니다.
//then,cathch는 같이 실행될수x
promise4.then(result => console.log(result)).catch(error => console.log(error));
// 3초 후에 결과가 출력
// reject

//Chaining Promise
// 상황에 따라 promise 를 여러 번 사용해야 하는 경우가 존재합니다. 
// API 로 data 를 받아오기 위해서 promise 를 사용하고 
// 받아온 데이터의 암호를 풀기 위해서 promise 를 한 번 더 사용할 수 있습니다.
// 이를 Chaining Promise 라고 합니다.

const promise5 = new Promise((resolve, reject)=>{
    resolve(2);
  });
  
  promise5.then(result => {
    const output = result+1;
    console.log(output);   // 3
    return output;
  })
  .then(result => {
    const output = result+1;   // 4
    console.log(output);
    return output;
  })

// 그런데 중간의 chain 에서 에러가 발생하면 어떻게 될까요?
// 이를 해결하기 위해서 각 then 마다 catch 를 넣어줘야 할까요?
// 다행히도 catch 는 한 번의 사용으로 모든 then 에 대해서 해결할 수 있습니다. ->하지만 어디서 에러났는지 판단하기 힘듬 (async await의 탄생배경)
const promise6 = new Promise((resolve, reject)=>{
    resolve(2);
  });
  
  const plusOne = num => num + 1;
  
  promise
  .then(plusOne)
  .then(plusOne)
  .then(plusOne)
  .then(()=> {
    throw Error("error")
  })
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Promise all
// all() 은 주어진 모든 Promise 를 실행한 후 진행되는 하나의 Promise 를 반환합니다.
// 3개의 promise 에 대해 이들을 array 로 all 에 넘겨주면 allPromise 는 3개의 promise가 모두 끝날 때 까지 기다린 후에 이들의 결과값을 array로 반환하게 됩니다.
const p1 = new Promise(resolve => {
    setTimeout(resolve, 2000, "First");
  })
  
const p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, "Second");
  })
  
const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
  })
  
const allPromise = Promise.all([p1,p2,p3]);
allPromise.then(values => console.log(values));// [ 'First', 'Second', 'Third' ]


// 이 중 하나의 promise 에서 에러가 발생한다면 어떻게 될까요?
// allPromise 는 모든 promise 에 대해서 결과값을 받아와야 하는데 그러지 못하므로 에러가 발생하게 됩니다
//이 경우 catch 는 각 promise 에 해줄 필요는 없고, allPromise 에 대해서만 해주면 됩니다.

const allPromise2 = Promise.all([p1,p2,p3]);
allPromise2
.then(values => console.log(values))
.catch(error => console.log(error));
// First reject


// Promise race
// race() 는 주어진 Promise 중 가장 먼저 완료된 것의 결과값을 이행하거나 거부합니다.
// 위에서 살펴본 all 과 사용하는 방법은 같습니다.
// p1 은reject 하고 있지만 결과는 Second 가 나옵니다.
// p2 는 1초만에 끝나기 때문에 그 결과값을 받아 바로 출력해버리는 것이죠.
const p11 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "First reject");
  })
  
  const p22 = new Promise(resolve => {
    setTimeout(resolve, 1000, "Second");
  })
  
  const p33 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
  })
  
  const allPromise3 = Promise.race([p11,p22,p33]);
  allPromise3
  .then(values => console.log(values))   // Second
  .catch(error => console.log(error));

//   Promise finally
// finally() 는 Promise 가 resolve 되던 reject 되던 상관없이 지정된 함수를 실행합니다.
// 이를 통해 promise 의 결과에 상관없이 동작을 해야할 때 유용하게 구현할 수 있습니다.
// 해당 예시가 중간에 에러가 발생하고 이를 catch 로 잡아주었어도 finally 는 실행되어 end 를 출력합니다.
const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "First");
  });
  
  p5
  .then(result => console.log(result))// First 
  .finally(()=>console.log("end")); // end

  