/* 1. 타입 별칭과 인터페이스 */
type UserSample = {
  id: number;
  name: string;
  isAdmin?: boolean; // 선택적 프로퍼티(optional property)
};

interface ProductSample {
  id: number;
  title: string;
  price: number;
}

const exampleUser: UserSample = { id: 1, name: "Kim" };
const exampleProduct: ProductSample = { id: 100, title: "책", price: 16000 };

console.log(exampleUser, exampleProduct);

/* 2. 함수의 타입 */
function sum(a: number, b: number): number {
  return a + b;
}

const addResult = sum(2, 3);
console.log(addResult);

/* 3. 유니언 타입과 타입 가드 */
function printUnionId(id: number | string) {
  if (typeof id === "string") {
    console.log("ID(문자열):", id.toUpperCase());
  } else {
    console.log("ID(숫자):", id.toFixed(2));
  }
}

printUnionId(123.456); // 숫자
printUnionId("abcDEF"); // 문자열

/* 4. 제네릭(Generic) */
function toArray<T>(value: T): T[] {
  return [value];
}

const arrNum = toArray(123);
const arrStr = toArray("hi");
console.log(arrNum, arrStr);

/* 5. 타입 좁히기(Narrowing)와 타입 단언(Assertion) */
function getValueLength(input: string | string[]) {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.length; // 배열 또한 length 프로퍼티가 있음
  }
}

// 타입 단언(Assertion) 사용 예시 (권장되는 방식은 아님)
const elem = document.getElementById("myElem") as HTMLDivElement | null;
if (elem) {
  elem.style.color = "blue";
}
/* 6. 인터페이스와 타입 별칭 */
interface Animal {
  name: string;
  sound(): void;
}

type Vehicle = {
  brand: string;
  year: number;
};

const dog: Animal = {
  name: "멍멍이",
  sound() {
    console.log(`${this.name}가 짖어요!`);
  },
};

const car: Vehicle = {
  brand: "Hyundai",
  year: 2023,
};

dog.sound();
console.log(car);

/* 7. 옵셔널 체이닝과 널 병합 연산자 */
type Book = {
  title: string;
  author?: {
    name: string;
  };
};

const b1: Book = { title: "마음의 등대" };
console.log(b1.author?.name ?? "저자 정보 없음");

/* 8. readonly와 const assertion */
type Color = {
  readonly hex: string;
};

const skyBlue: Color = { hex: "#87ceeb" };
// skyBlue.hex = "#000000"; // 에러: 읽기 전용 프로퍼티

const RGB = [255, 255, 0] as const;
// RGB[0] = 0; // 에러: 수정 불가

/* 9. 타입 추론과 ReturnType, Parameters 유틸리티 타입 */
function multiply(a: number, b: number) {
  return a * b;
}
type MultiplyReturn = ReturnType<typeof multiply>;
type MultiplyParams = Parameters<typeof multiply>;

const multResult: MultiplyReturn = multiply(2, 3);
const params: MultiplyParams = [4, 5];
console.log(multResult, multiply(...params));

/* 10. 인덱스드 엑세스 타입과 keyof */
type UserSample2 = {
  id: number;
  username: string;
  email: string;
};

type UserKey = keyof UserSample2; // "id" | "username" | "email"
type UserNameType = UserSample2["username"]; // string

function printUserField(user: UserSample2, field: UserKey) {
  console.log(user[field]);
}

const sampleUser: UserSample2 = {
  id: 10,
  username: "jo",
  email: "jo@email.com",
};
printUserField(sampleUser, "username");

/* 11. 맵드 타입 (Mapped Types) */
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = Optional<UserSample2>;
const optUser: PartialUser = { id: 1 }; // username, email 생략 가능

/* 12. 조건부 타입 (Conditional Types) */
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<"abc">; // true
type Test2 = IsString<42>; // false

/* 13. 인터섹션(&)과 유니온(|) 타입 */
type Admin = { admin: true };
type NormalUser = { admin?: false };
type FullUser = UserSample2 & Admin;
const superUser: FullUser = {
  id: 1,
  username: "super",
  email: "super@email.com",
  admin: true,
};
type Anyone = UserSample2 | Admin;

/* 14. 타입 가드 함수 */
function isAdmin(user: UserSample2 | FullUser): user is FullUser {
  return "admin" in user && user.admin === true;
}
if (isAdmin(superUser)) {
  // 타입이 FullUser로 좁혀짐
  console.log("관리자입니다");
}

/* 15. 함수 오버로딩 */
function join(a: string, b: string): string;
function join(a: number, b: number): number;
function join(a: any, b: any): any {
  return a + b;
}
const strJoin = join("a", "b"); // string
const numJoin = join(1, 2); // number
console.log(strJoin, numJoin);

/* 16. keyof 연산자 */
type Car = { brand: string; model: string; year: number };
type CarKeys = keyof Car; // "brand" | "model" | "year"
function printCarKey(key: CarKeys) {
  console.log("Car key:", key);
}
printCarKey("brand");

/* 17. 타입 단언(as) */
const input = document.createElement("input");
const inputElement = input as HTMLInputElement;
inputElement.value = "hello";

/* 18. 인덱스 시그니처 */
type AnyObject = {
  [key: string]: string | number;
};
const obj: AnyObject = { foo: "bar", num: 123 };

/* 19. 유틸리티 타입 Record */
type Fruit = "apple" | "banana";
type FruitCount = Record<Fruit, number>;
const count: FruitCount = { apple: 2, banana: 3 };

/* 20. NonNullable 유틸리티 타입 */
type MaybeString = string | null | undefined;
type DefString = NonNullable<MaybeString>; // string
const s: DefString = "hello";

/* 21. Partial 유틸리티 타입 */
type UserProfile = {
  name: string;
  age: number;
  email: string;
};
type UserProfileUpdate = Partial<UserProfile>;
const partialUser: UserProfileUpdate = { email: "hi@example.com" };

/* 22. Readonly 유틸리티 타입 */
type ReadonlyProfile = Readonly<UserProfile>;
const readonlyUser: ReadonlyProfile = {
  name: "Kim",
  age: 20,
  email: "k@example.com",
};
// readonlyUser.name = "Lee"; // 에러: 읽기 전용 속성

/* 23. Pick 유틸리티 타입 */
type NameAndEmail = Pick<UserProfile, "name" | "email">;
const miniUser: NameAndEmail = { name: "A", email: "a@x.kr" };

/* 24. Omit 유틸리티 타입 */
type OmitEmail = Omit<UserProfile, "email">;
const person: OmitEmail = { name: "Moon", age: 30 };

/* 25. 매핑된 타입(Mapped Type) */
type Booleanified<T> = {
  [K in keyof T]: boolean;
};
type FeatureFlags = Booleanified<UserProfile>;
const flags: FeatureFlags = { name: true, age: false, email: true };

/* 26. 제네릭 인터페이스 */
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
const userApiRes: ApiResponse<UserProfile> = {
  success: true,
  data: { name: "Kim", age: 23, email: "k@x.kr" },
};

/* 27. 인터섹션 타입 */
type WithTimestamp = {
  createdAt: Date;
  updatedAt: Date;
};
type UserWithTime = UserProfile & WithTimestamp;
const userWithTime: UserWithTime = {
  name: "Kim",
  age: 23,
  email: "kim@x.kr",
  createdAt: new Date(),
  updatedAt: new Date(),
};

/* 28. 타입 제약이 있는 제네릭 */
function getFirstElement<T extends Array<unknown>>(
  arr: T
): T[number] | undefined {
  return arr[0];
}
const first = getFirstElement([10, 20, 30]);
const firstStr = getFirstElement(["a", "b", "c"]);

/* 29. 조건부 타입 */
type IsString<T> = T extends string ? "STRING" : "NOT_STRING";
type TestStr = IsString<string>; // "STRING"
type TestNum = IsString<number>; // "NOT_STRING"

/* 30. 템플릿 리터럴 타입 */
type EventType = "click" | "scroll" | "keydown";
type EventHandlerName = `on${Capitalize<EventType>}`;
const clickHandler: EventHandlerName = "onClick";
