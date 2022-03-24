// ! export를 사용하면 다른 JavaScript 구성 요소에 사용할 모듈을 내보낼 수 있습니다. 
// 그 모듈을 우리의 컴포넌트에 사용하기 위해 가져오기 import를 사용합니다.

export default function detail(name, age) {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
}
//detailComponent.js



import detail from './detailComponent';
console.log(detail('영희', 20));
//anotherComponenet.js

// 둘 이상의 모듈을 가져오려는 경우, 중괄호에 넣기만 하면 됩니다.
import { detail, userProfile, getPosts } from './detailComponent';

console.log(detail('영희', 20));
console.log(userProfile);
console.log(getPosts);

//default 생략시 불러오기할때 {} 제거