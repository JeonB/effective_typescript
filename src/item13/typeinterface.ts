type AorB = "a" | "b"; // 유니온 인터페이스라는 개념은 없음. 또한, 유니온 타입을 확장하는 것은 불가능.
// interface Astate extends AorB{
//   name: string;
// }

// 동적 문법은 type에서만 사용 가능
// console.log 에서 확인 불가. 런타임에 타입은 전부 삭제되므로
type MappingType = {
  [key in keyof Istate]: boolean;
};
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

// 선언 병합
interface Istate {
  name: string;
  capital: string;
}

interface Istate {
  population: string;
}

const city: Istate = {
  name: "Seoul",
  capital: "Seoul",
  population: "10,000,000",
};

const arrtest = [1, 2, 3];
for (const key in arrtest) {
  console.log(key);
  console.log(typeof key);
}

/* 요약 */
// IState , TState 같은 네이밍은 사용 지양
// 일반적으로 interface와 type 모두 큰 차이는 없다.
// 그러나 type은 유니온 타입 사용이 가능하고
// interface는 선언 병합이 가능하다.
