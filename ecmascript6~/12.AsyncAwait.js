// 3async/await:ES2017에 새로 추가된 async/await는 위에서 알아봤던 Promise 객체를 기반으로 사용한다.
// Promise 대신 쓰는 새로운 방식이 아니라 Promise를 다른 방식으로 사용,기존 promise랑 차이점은 위에서 배웠던 resolve, reject, then, catch를 쓰지 않는다는 것이다.
{
  async function hello() {
    return "Hello";
  }

  function callHello() {
    const r = hello();
    console.log(r);
  }

  callHello(); //Promise { 'Hello'} 기본 메소드 앞에 async만 붙이면 반환되는 값이 Promise 객체가 된다
}

// 그런데 우리는 위 예시처럼 객체 형태의 Promise { 'Hello' }가 아니라 그 안에 있는 String 형태의 Hello를 출력하고 싶다.->await
{
  async function hello() {
    return "Hello";
  }
  async function callHello() {
    const r = await hello();
    console.log(r);
  }

  callHello(); //Hello
}


// callback과 promis async차이점
// callback을 사용하면 비동기 로직의 결과값을 처리하기 위해서는 callback안에서만 처리를 해야하고, 콜백 밖에서는 비동기에서 온 값을 알 수가 없습니다.->콜백지옥->가독성,유지보수 최악
// promise를 사용하면 비동기에에서 온 값이 promise 객체에 저장되기 때문에 코드 작성이 용이해집니다.cath로 에러를받기떄문에 어디서 발생된 에러인지를 명확히 확인할 수 없게 됩니다.
// async: try...catch문을 사용하여 예외처 promise에서 예외가 발생되면 어디서 발생되었는지 확인할 수 없던 단점들을 async/await을 이용하여 해결하게 된 것입니다.

// (1) async는 간결하다
// 앞선 예시를 다시 사용해보자.
// 우리는 getAnimals()를 호출하여 응답값을 받고, 이 응답값을 출력하고 싶다.
// promise의 then방식이라면 아래와 같이 작성할 것이다.
function printAnimals() {
  getAnimals().then((data) => {
    console.log(data);
  })
}

// 그럼 async await로 어떻게 표현할까?
// 함수에 async 키워드를 적고, 비동기 대상에 await를 추가해주면 된다.
// 비동기 대상 함수에 await를 추가하면, '이 함수의 처리를 기다려!' 라는 의미가 되기에
// await 함수 아래에 해당 함수의 응답값을 사용하는 구문을 추가해주면 된다.

async function printAnimals() {
  const animals = await getAnimals();  // 이 함수처리 끝날때까지 기다려!
  console.log(animals)                 // 응답값이 출력됨!
}

// 어? 그런데 간결성 측면에서 둘 다 큰 차이가 없는 거 같은데요?
// 짧은 예시로만 봤을 때 큰 차이를 못 느낄 것이다.
// 그렇다면 데이터를 요청하여 처리까지 한다면? promise의 then을 사용하면 아래와 같다.
function printAnimals() {
  return getAnimals()
    .then(data => {
      if (data.property) {
        return sampleFunc1(data)
          .then(anotherData => {
            console.log(anotherData)
          })
      }else {
        console.log(data)
      }
    })
}
// then방식을 보면 라인 수가 많은 것은 물론 들여쓰기도 많아 복잡한 느낌이 든다.
// 그럼 async await를 쓰면 어떨까?
async function printAnimals() {
  const animals = await getAnimals();
  if (animals.property) {
    const sampleData = await sampleFunc1(animals);
    console.log(sampleData);
  }else {
    console.log(animals);
  }
}
// then에 비해 많은 들여쓰기는 물론 라인도 차지 않는다.
// 또한 응답값을 명시적인 변수에 담아 사용하므로 직관적으로 변수를 인식할 수 있다.
// 이처럼 async await는 then 방식에 비해 간결하다는 장점을 가지고 있다.

// (2) async는 에러 핸들링에 유리하다
// 서버에 데이터를 요청하는 작업을 하다보면, 에러가 발생할 수 있다.
// 이 때문에 우리는 에러 핸들링도 해주어야 한다.
// 이번에는 printAnimals()에서 에러가 발생한 게 아니라, JSON.parse에서 에러가 발생했다고 가정하자.
// 이 경우, then을 사용하면 내부에 추가적인 catch문을 적어줘야한다.
function printAnimals() {
  try {
    getAnimals()
      .then((response) => {
        const data = JSON.parse(response); // 여기서 에러 발생한다고 가정
        console.log(data);
      })
      .catch((err) => {
        // 추가적인 에러
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}
// 이 방식은 직관적이지 않을 뿐더러 에러를 처리하는 catch문이 중복된다

// 하지만 async await를 사용하게 되면 하나의 catch만 해주면된다!
// 해당 catch문에서는 try 내부에서 발생하는 모든 에러를 접근할 수 있다.
async function printAnimals() {
  try {
    const data = await JSON.parse(getAnimals());
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// (3) async는 에러 위치를 찾기 쉽다
// 만약 프로미스를 연속으로 호출한다고 해보자.
// 이때 만약 어느 지점에서 에러가 발생하면 어떤 then에서 에러가 발생했는지 찾기가 어렵다.
function sample() {
  return sampleFunc()
    .then((data) => {
      return data;
    })
    .then((data2) => {
      return data2;
    })
    .then((data3) => {
      return data3;
    })
    .catch((err) => console.log(err)); // 결과적으로 문제가 발생했다
}

// 하지만 async를 사용하게 되면, 어떤 지점에서 에러가 발생했는지 쉽게 찾을 수 있다.

async function sample() {
  const data1 = await sampleFunc(); // 문제 발생시 data1값이 유효치 않음
  const data2 = await sampleFunc2(data1);
  return data2;
}


{
  async function main(){
    const result = await promises
    return 'seok' //async에서 return한 값은 무조건 then으로 받아야됨
  }

  main.then((result)=>{console.log()})
}