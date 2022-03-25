/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    // 💩
    const name = 'seok';
    const age = '18';
    const seok1 = {
        name: name,
        age: age,
    };

    // ✨
    //key와 value동일시 하나로 생략가능 
    const seok2 = {
        name,
        age,
    };

    console.log(seok1, seok2);
}
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'seok',
      level: 1,
    };
  
    // 💩
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨
    {
      const { name, level } = student;
      console.log(name, level);
    //다른이름으로 선언하고싶다면
      const { name: studentName, level: studentLevel } = student;
      console.log(studentName, studentLevel);
    }
  
    // array
    const animals = ['🐶', '😽'];
  
    // 💩
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨
    {
      const [first, second] = animals;
      console.log(first, second);
    }

  }
  
  /**
   * Spread Syntax
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);
  
    //복사하면서 데이터추가,수정
    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';  //...는 참조값을 가져오기떄문에 모든 obj1값이 바뀜
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];  
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 };//key가 동일한 오브젝트를 병합한다면 , 뒤에게 앞에거를 덮어씀
    console.log(dog);

  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }

  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }

  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }