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

/* object */
let obj2: object = {};
let arr2: object = [];
let func2: object = function () {};
let nullValue2: object = null;
let date2: object = new Date();

/* void */
function hello2(msg: string): void {
  console.log(`Hello ${msg}`);
}
const hi2: void = hello2("world"); // Hello world
console.log(hi2); // 실제로는 undefined를 반환

/* never */
/* 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없음 */
function error(message: string): never {
  throw new Error(message);
}

const never: [] = []; // number[]로 해야됨
never.push(3); // Error - TS2345: Argument of type '3' is not assignable to parameter of type 'never'.

/* non-null 연산자 */
// Error - TS2533: Object is possibly 'null' or 'undefined'.
function fnA(x: number | null | undefined) {
  return x.toFixed(2);
}

// if statement
function fnD(x: number | null | undefined) {
  if (x) {
    return x.toFixed(2);
  }
}

// Type assertion
function fnB(x: number | null | undefined) {
  return (x as number).toFixed(2);
}
function fnC(x: number | null | undefined) {
  return (<number>x).toFixed(2);
}

// Non-null assertion operator
function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}

/* 타입 만족 */
// Pass.. 안전하지 않은 타입 '단언'..
interface User {
  name: string;
  age: number;
}

const userA = {
  name: "Neo",
} as User;

// Error! 안전한 타입 '선언'!
const typeUser: User = {
  name: "jeon",
  age: 20,
  isValid: true,
};

let userB = {
  name: "Neo",
  age: 20,
  isValid: true,
};
const userB2: User = userB; // 구조적 타입 시스템 때문에 가능

// Error! 안전한 타입 '만족'!
// 타입이 만족을 하는지 확인만 하니 그다지 유용하지 않음
const userC = {
  name: "Neo",
} satisfies User;

/* interface */
interface Users {
  name: string;
  age: number;
  isAdult: boolean;
}

let user1: Users = {
  name: "Neo",
  age: 123,
  isAdult: true,
};

// Error - TS2741: Property 'isAdult' is missing in type '{ name: string; age: number; }' but required in type 'IUser'.
let user2: Users = {
  name: "Evan",
  age: 456,
};

interface IUser {
  readonly name: string;
  age: number;
}

// 초기화
let user: IUser = {
  name: "Neo",
  age: 36,
};

user.age = 85; // Ok
user.name = "Evan"; // Error - TS2540: Cannot assign to 'name' because it is a read-only property.

// All readonly properties
interface IUser {
  readonly name: string;
  readonly age: number;
}
let user: IUser = {
  name: "Neo",
  age: 36,
};
user.age = 85; // Error
user.name = "Evan"; // Error

// Readonly Utility
interface IUser {
  name: string;
  age: number;
}
let user: Readonly<IUser> = {
  name: "Neo",
  age: 36,
};
user.age = 85; // Error
user.name = "Evan"; // Error

// Type assertion
let user = {
  name: "Neo",
  age: 36,
} as const;
user.age = 85; // Error
user.name = "Evan"; // Error

interface IName {
  (PARAMETER: PARAM_TYPE): RETURN_TYPE; // Call signature
}

interface IUser {
  name: string;
}
interface IGetUser {
  (name: string): IUser;
}

// 매개 변수 이름이 인터페이스와 일치할 필요가 없습니다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있습니다.
const getUser: IGetUser = function (n) {
  // n is name: string
  // Find user logic..
  // ...
  return user;
};
getUser("Heropy");

interface IUser2 {
  name: string;
  getName(): string;
}

class User implements IUser2 {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}

const neo = new User("Neo");
neo.getName(); // Neo

interface ICat {
  name: string;
}

class Cat implements ICat {
  constructor(public name: string) {}
}

function makeKitten(c: ICat, n: string) {
  return new c(n); // Error - TS2351: This expression is not constructable. Type 'ICat' has no construct signatures.
}
const kitten = makeKitten(Cat, "Lucy");
console.log(kitten);

interface ICat2 {
  name: string;
}
interface ICatConstructor {
  new (name: string): ICat2;
}

class Cat2 implements ICat2 {
  constructor(public name: string) {}
}

function makeKitten2(c: ICatConstructor, n: string) {
  return new c(n); // ok
}
const kitten2 = makeKitten2(Cat2, "Lucy");
console.log(kitten);
interface IFullName {
  firstName: string;
  lastName: string;
}
interface IFullNameConstructor {
  new (firstName: string): IFullName; // Construct signature
}

function makeSon(c: IFullNameConstructor, firstName: string) {
  return new c(firstName);
}
function getFullName(son: IFullName) {
  return `${son.firstName} ${son.lastName}`;
}

// Anderson family
class Anderson implements IFullName {
  public lastName: string;
  constructor(public firstName: string) {
    this.lastName = "Anderson";
  }
}
const tomas = makeSon(Anderson, "Tomas");
const jack = makeSon(Anderson, "Jack");
getFullName(tomas); // Tomas Anderson
getFullName(jack); // Jack Anderson

// Smith family?
class Smith implements IFullName {
  public lastName: string;
  constructor(public firstName: string, agentCode: number) {
    this.lastName = `Smith ${agentCode}`;
  }
}
const smith = makeSon(Smith, 7); // Error - TS2345: Argument of type 'typeof Smith' is not assignable to parameter of type 'IFullNameConstructor'.
getFullName(smith);

interface IItem {
  [itemIndex: number]: string; // Index signature
}
let item: IItem = ["a", "b", "c"]; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
console.log(item["0"]);

interface IItem2 {
  [itemIndex: number]: string | boolean | number[];
}
let item2: IItem2 = ["Hello", false, [1, 2, 3]];
console.log(item[0]); // Hello
console.log(item[1]); // false
console.log(item[2]); // [1, 2, 3]

interface ICountries {
  KR: "대한민국";
  US: "미국";
  CP: "중국";
}
let country: keyof ICountries; // 'KR' | 'US' | 'CP'
country = "KR"; // ok
country = "RU"; // Error - TS2322: Type '"RU"' is not assignable to type '"KR" | "US" | "CP"'.
let country2: ICountries[keyof ICountries]; // ICountries['KR' | 'US' | 'CP']
country2 = "대한민국";
country2 = "러시아"; // Error - TS2322: Type '"러시아"' is not assignable to type '"대한민국" | "미국" | "중국"'.

const fruits3 = ["Apple", "Banana", "Cherry"] as const;
type Fruit = (typeof fruits3)[number];
// type Fruit = 'Apple' | 'Banana' | 'Cherry'

interface IAnimal {
  name: string;
}
interface ICat extends IAnimal {
  meow(): string;
}

class Cat implements ICat {
  // Error - TS2420: Class 'Cat' incorrectly implements interface 'ICat'. Property 'name' is missing in type 'Cat' but required in type 'ICat'.
  meow() {
    return "MEOW~";
  }
}

interface IFullName {
  firstName: string;
  lastName: string;
}
interface IFullName {
  middleName: string;
}

const fullName: IFullName = {
  firstName: "Tomas",
  middleName: "Sean",
  lastName: "Connery",
};

/* 제네릭 */
//재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공

// 범용성 떨어짐
function toArray(a: number, b: number): number[] {
  return [a, b];
}
toArray(1, 2);
toArray("1", "2"); // Error - TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.

// 가독성 떨어짐
function toArray(a: number | string, b: number | string): (number | string)[] {
  return [a, b];
}
toArray(1, 2); // Only Number
toArray("1", "2"); // Only String
toArray(1, "2"); // Number & String

function toArray<T>(a: T, b: T): T[] {
  return [a, b];
}

toArray<number>(1, 2);
toArray<string>("1", "2");
toArray<string | number>(1, "2");
toArray<number>(1, "2"); // Error

// 타입 추론때문에 사용 시점에 타입 제공 안 해도 됨
function toArray<T>(a: T, b: T): T[] {
  return [a, b];
}

toArray(1, 2);
toArray("1", "2");
toArray(1, "2"); // Error
