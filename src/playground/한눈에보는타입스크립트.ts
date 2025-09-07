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

let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

// Tuple 활용
let users: [number, string, boolean][];
// Or
// let users: Array<[number, string, boolean]>

users = [
  [1, "Neo", true],
  [2, "Evan", false],
  [3, "Lewis", true],
];

let a: readonly [string, number] = ["Hello", 123];
a[0] = "World"; // Error - TS2540: Cannot assign to '0' because it is a read-only property

//Enum
// 값 설정 안 하면 0부터 시작해서 1씩 증가
// Week.Sun = 0 , Week[0] = "Sun"  역방향 매핑 지원
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// 문자열은 리버스 매핑 지원 x
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
console.log(Color.Red); // red
console.log(Color["Green"]); // green
console.log(Color["green"]); // 리버스 매핑은 안 됨

// Unknown
// any와 동일하게 어떤 타입이든 할당할 수 있지만, unknown은 다른 타입에 할당 불가
let av: unknown = 123;
let bv: any = 123;

av = "Hello";
bv = "Hello";

let cv = 123;
cv = av; // 에러발생

console.log(av); // unknown
console.log(bv); // any

// Object
// typeof 연산자가 "object"로 반환하는 모든 타입
let obje: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null; // null은 strict 옵션 설정 시 할당 불가가
let date: object = new Date();

// void
// 값을 반환하지 않는 함수는 실제로는 undefined를 반환함. 단지 그 값을 사용 안 할뿐
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}
const hi: void = hello("world"); // Hello world
console.log(hi); // undefined

/* any */
let any: any = 123;
any = "Hello world";
any = {};
any = null;

const list: any[] = [1, true, "Anything!"];

/* unknown */
let unknown: unknown = 123;
unknown = "Hello world";
unknown = {};
unknown = null;
any = unknown; // 유일하게 unknown은 any에 할당 가능

const 문자열: string = unknown; //any와 달리 unknown은 모든 타입에 할당 불가
const 문자열2: string = unknown as string;

const list2: unknown[] = [1, true, "Anything!"];
