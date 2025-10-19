/* 제약 조건 */
type U = string | number | boolean;

interface User<T extends U> {
  name: string;
  age: T;
}

const user: User<string> = {
  name: "Neo",
  age: "123",
};

// 반드시 제네릭 타입을 명시해야 함
const user2: User = {
  name: "Neo",
  age: 123,
};

const user3: User<boolean> = {
  name: "Neo",
  age: true,
};

// 제약조건 위배
const user4: User<string[]> = {
  name: "Neo",
  age: ["123", "456", "789"],
};

/* 제네릭 타입 추론 */
function identity<T extends U>(value: T): T {
  return value;
}

const result = identity(1);
const result2 = identity("Hello");
const result3 = identity(["Hello", "World"]);
