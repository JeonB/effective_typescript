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
