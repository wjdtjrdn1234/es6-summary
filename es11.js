/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
    const person1 = {
      name: 'seok',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'woo',
        },
      },
    };
    const person2 = {
      name: 'woo',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);  //에러
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'seok';
      const userName = name || 'woo';
      console.log(userName); //seok
    }
  
    {
      const name = null;
      const userName = name || 'woo';
      console.log(userName); //woo
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'woo';
      console.log(userName); //woo
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);  //undefined
    }
  
    // ✨
    {
      const name = '';
      const userName = name ?? 'woo'; //name이 있으면 name을 쓰고 없으면 woo
      console.log(userName);
  
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }
  }