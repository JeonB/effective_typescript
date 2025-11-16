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
// keyof와 제네릭 제약 조건 활용 예시

function getUserProperty<T extends U, K extends keyof User<T>>(
  user: User<T>,
  key: K
): User<T>[K] {
  return user[key];
}

// 사용 예시
const name = getUserProperty(user, "name"); // string
const age = getUserProperty(user, "age"); // string

// 여러 타입에서의 User
const userNum: User<number> = { name: "Alice", age: 25 };
const numAge = getUserProperty(userNum, "age"); // number

// 제네릭 함수 내에서 타입을 확장하는 예시
function mergeUser<T extends U>(
  user: User<T>,
  extra: Partial<User<T>>
): User<T> {
  return { ...user, ...extra };
}

const merged = mergeUser(user, { age: "456" });

// 조건부 타입과 extends
type IsString<T> = T extends string ? true : false;

type NameIsString = IsString<typeof user.name>; // true
type AgeIsString = IsString<typeof user.age>; // true (user는 User<string>이므로)

// 배열에서 제약 조건 활용 예시
function filterUsersByAge<T extends U>(users: User<T>[], age: T): User<T>[] {
  return users.filter((u) => u.age === age);
}

const users: User<number>[] = [
  { name: "Tom", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Neo", age: 20 },
];

const filtered = filterUsersByAge(users, 20);
