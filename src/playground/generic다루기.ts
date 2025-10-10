// ============================================
// 제네릭(Generic) 학습 예시코드
// ============================================

// 1. 기본 제네릭 함수
function identity<T>(arg: T): T {
  return arg;
}

// 사용 예시
const stringResult = identity<string>("Hello"); // string
const numberResult = identity<number>(42); // number
const autoInferred = identity("TypeScript"); // string (타입 추론)

// 2. 제네릭 인터페이스
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class StringContainer implements Container<string> {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }
}

// 3. 제네릭 클래스
class GenericStack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// 사용 예시
const numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

const stringStack = new GenericStack<string>();
stringStack.push("first");
stringStack.push("second");

// 4. 제약 조건 (Generic Constraints)
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 사용 예시
logLength("Hello"); // string은 length 속성을 가짐
logLength([1, 2, 3]); // array는 length 속성을 가짐
logLength(123); // Error: number는 length 속성이 없음

// 5. keyof 연산자와 제네릭
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
  city: "Seoul",
};

const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
// const invalid = getProperty(person, "invalid"); // Error

// 6. 조건부 타입 (Conditional Types)
type NonNullable<T> = T extends null | undefined ? never : T;

type Example1 = NonNullable<string | null>; // string
type Example2 = NonNullable<number | undefined>; // number

// 7. 매핑된 타입 (Mapped Types)
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 사용 예시
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>; // 모든 속성이 선택적
type RequiredUser = Required<PartialUser>; // 모든 속성이 필수
type ReadonlyUser = Readonly<User>; // 모든 속성이 읽기 전용

// 8. 유틸리티 타입과 제네릭
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// 사용 예시
type UserName = Pick<User, "name">; // { name: string }
type UserWithoutId = Omit<User, "id">; // { name: string; email: string }

// 9. 함수 오버로드와 제네릭
function process<T extends string | number>(
  value: T
): T extends string ? string : number;
function process(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}

// 10. 제네릭과 배열
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

function getLastElement<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

// 11. 제네릭과 Promise
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

// 사용 예시
interface ApiResponse {
  data: any[];
  total: number;
}

// const apiData = await fetchData<ApiResponse>("/api/data");

// 12. 제네릭과 이벤트 핸들러
interface EventHandler<T> {
  (event: T): void;
}

interface ClickEvent {
  type: "click";
  target: HTMLElement;
}

interface KeyEvent {
  type: "keydown";
  key: string;
}

const handleClick: EventHandler<ClickEvent> = (event) => {
  console.log("Clicked on:", event.target);
};

const handleKey: EventHandler<KeyEvent> = (event) => {
  console.log("Key pressed:", event.key);
};

// 13. 제네릭과 유니온 타입
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

function safeDivide(a: number, b: number): Result<number> {
  if (b === 0) {
    return { success: false, error: new Error("Division by zero") };
  }
  return { success: true, data: a / b };
}

// 14. 재귀적 제네릭
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface NestedObject {
  level1: {
    level2: {
      value: string;
    };
  };
}

type ReadonlyNested = DeepReadonly<NestedObject>;

// 15. 제네릭과 함수 시그니처
type GenericFunction<T> = (arg: T) => T;

const double: GenericFunction<number> = (x) => x * 2;
const capitalize: GenericFunction<string> = (s) => s.toUpperCase();

// 16. 제네릭과 클래스 상속
abstract class Repository<T> {
  abstract findById(id: string): Promise<T | null>;
  abstract save(entity: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
}

class UserRepository extends Repository<User> {
  async findById(id: string): Promise<User | null> {
    // 실제 구현
    return null;
  }

  async save(user: User): Promise<User> {
    // 실제 구현
    return user;
  }

  async delete(id: string): Promise<void> {
    // 실제 구현
  }
}

// 17. 제네릭과 인덱스 시그니처
interface Dictionary<T> {
  [key: string]: T;
}

const stringDict: Dictionary<string> = {
  key1: "value1",
  key2: "value2",
};

const numberDict: Dictionary<number> = {
  count1: 1,
  count2: 2,
};

// 18. 제네릭과 제네릭 (중첩 제네릭)
interface ApiResponse2<T> {
  data: T;
  status: number;
  message: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

type UserListResponse = ApiResponse2<PaginatedResponse<User>>;

// 19. 제네릭과 타입 가드
function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

function processValue<T>(value: unknown): T | null {
  if (isArray<T>(value)) {
    return value[0] || null;
  }
  return null;
}

// 20. 제네릭과 데코레이터 패턴
function withLogging<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    console.log(`Calling function with args:`, args);
    const result = fn(...args);
    console.log(`Function returned:`, result);
    return result;
  };
}

const loggedAdd = withLogging((a: number, b: number) => a + b);
const result = loggedAdd(2, 3); // 로그와 함께 실행

// ============================================
// 실전 활용 예시
// ============================================

// API 클라이언트 예시
class ApiClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async post<T, R>(url: string, data: T): Promise<R> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

// 상태 관리 예시
interface State<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

class StateManager<T> {
  private state: State<T> = {
    data: null,
    loading: false,
    error: null,
  };

  private listeners: Array<(state: State<T>) => void> = [];

  getState(): State<T> {
    return { ...this.state };
  }

  setState(newState: Partial<State<T>>): void {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  subscribe(listener: (state: State<T>) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.getState()));
  }
}

// 사용 예시
const userStateManager = new StateManager<User>();
const unsubscribe = userStateManager.subscribe((state) => {
  console.log("User state changed:", state);
});

export {
  identity,
  GenericStack,
  logLength,
  getProperty,
  process,
  getFirstElement,
  getLastElement,
  safeDivide,
  withLogging,
  ApiClient,
  StateManager,
  type Result,
  type NonNullable,
  type DeepReadonly,
  type GenericFunction,
};
