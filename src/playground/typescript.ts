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
