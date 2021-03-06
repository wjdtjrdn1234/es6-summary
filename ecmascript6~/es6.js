/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    // ๐ฉ
    const name = 'seok';
    const age = '18';
    const seok1 = {
        name: name,
        age: age,
    };

    // โจ
    //key์ value๋์ผ์ ํ๋๋ก ์๋ต๊ฐ๋ฅ 
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
  
    // ๐ฉ
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // โจ
    {
      const { name, level } = student;
      console.log(name, level);
    //๋ค๋ฅธ์ด๋ฆ์ผ๋ก ์ ์ธํ๊ณ ์ถ๋ค๋ฉด
      const { name: studentName, level: studentLevel } = student;
      console.log(studentName, studentLevel);
    }
  
    // array
    const animals = ['๐ถ', '๐ฝ'];
  
    // ๐ฉ
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // โจ
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
  
    //๋ณต์ฌํ๋ฉด์ ๋ฐ์ดํฐ์ถ๊ฐ,์์ 
    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';  //...๋ ์ฐธ์กฐ๊ฐ์ ๊ฐ์ ธ์ค๊ธฐ๋๋ฌธ์ ๋ชจ๋  obj1๊ฐ์ด ๋ฐ๋
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['๐', '๐'];
    const fruits2 = ['๐', '๐ฅ'];
    const fruits = [...fruits1, ...fruits2];  
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '๐' };
    const dog2 = { dog: '๐ถ' };
    const dog = { ...dog1, ...dog2 };//key๊ฐ ๋์ผํ ์ค๋ธ์ ํธ๋ฅผ ๋ณํฉํ๋ค๋ฉด , ๋ค์๊ฒ ์์๊ฑฐ๋ฅผ ๋ฎ์ด์
    console.log(dog);

  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // ๐ฉ
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
  
    // โจ
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
    // ๐ฉ
    {
      let component;
      if (isCat) {
        component = '๐ธ';
      } else {
        component = '๐ถ';
      }
      console.log(component);
    }
  
    // โจ
    {
      const component = isCat ? '๐ธ' : '๐ถ';
      console.log(component);
      console.log(isCat ? '๐ธ' : '๐ถ');
    }

  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '๐ค';
    const temparature = '16ยฐC';
  
    // ๐ฉ
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // โจ
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }