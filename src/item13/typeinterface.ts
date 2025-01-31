type AorB = "a" | "b"; // 유니온 인터페이스라는 개념은 없음

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
