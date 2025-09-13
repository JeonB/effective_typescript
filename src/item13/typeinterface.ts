type AorB = "a" | "b"; // 유니온 인터페이스라는 개념은 없음

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
