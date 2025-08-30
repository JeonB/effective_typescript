// 타입 지정
function someFunc(a: TYPE_A, b: TYPE_B): TYPE_RETURN {
  return a + b;
}
let some: TYPE_SOME = someFunc(1, 2);

// Number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

// Array
// 문자열만 가지는 배열
let fruits: string[] = ["Apple", "Banana", "Mango"];
// Or
let fruits2: Array<string> = ["Apple", "Banana", "Mango"];

// 숫자만 가지는 배열
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven2: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// 문자열 또는 숫자만 가지는 배열
let array: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];
// Or
let array2: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];

// 항목 값을 단언할 수 없을 경우
let someArr: unknown[] = [0, 1, {}, [], "str", false];

interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}
let userArr: IUser[] = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];
