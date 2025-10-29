// 만약 variableTest에 타입을 추가하고 타입가드를 추가하지 않으면 never에서 걸림
const typeguardNever = (variableTest: string | number | boolean): void => {
  if (typeof variableTest === "string") {
    console.log(variableTest);
  } else if (typeof variableTest === "number") {
    console.log(variableTest);
  } else if (typeof variableTest === "boolean") {
    console.log(variableTest);
  } else {
    const unreachable: never = variableTest;
    throw new Error("UnExpected type: " + variableTest);
  }
};

/* 아래는 문자열 배열을 받아서 문자열을 반환하는 함수 */
const stringArrayToSingleString = (stringArray: string[]): string => {
  return stringArray.join("");
};

/* never 타입을 반환하는 함수 */
const neverReturnType = (): never => {
  throw new Error("never return type");
};

// ===== 실무 사용 예시들 =====

// 1. 에러 처리 함수 - never 반환으로 타입 안전성 보장
const handleError = (error: unknown): never => {
  console.error("에러 발생:", error);
  throw new Error(typeof error === "string" ? error : "알 수 없는 에러");
};

// 2. 무한 루프 함수 - never 반환
const infiniteLoop = (): never => {
  while (true) {
    console.log("무한 루프 실행 중...");
  }
};

// 3. 프로세스 종료 함수
const exitProcess = (code: number): never => {
  process.exit(code);
};

// 4. 타입 가드에서 exhaustive check (완전성 검사)
type Status = "loading" | "success" | "error";

const handleStatus = (status: Status): string => {
  switch (status) {
    case "loading":
      return "로딩 중...";
    case "success":
      return "성공!";
    case "error":
      return "에러 발생";
    default:
      // 새로운 Status 타입이 추가되면 여기서 컴파일 에러 발생
      const exhaustiveCheck: never = status;
      throw new Error(`처리되지 않은 상태: ${exhaustiveCheck}`);
  }
};

// 5. API 응답 타입 처리
type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string }
  | { status: "loading" };

const processApiResponse = <T>(response: ApiResponse<T>): T | string => {
  switch (response.status) {
    case "success":
      return response.data;
    case "error":
      return response.message;
    case "loading":
      return "로딩 중...";
    default:
      // 모든 케이스를 처리했으므로 never 타입
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
};

// 6. 유니온 타입에서 특정 타입 제거
type NonNullable<T> = T extends null | undefined ? never : T;

const removeNulls = <T>(arr: (T | null | undefined)[]): NonNullable<T>[] => {
  return arr.filter((item): item is NonNullable<T> => item != null);
};

// 7. 조건부 타입에서 never 사용
type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// string 타입의 키만 추출
type StringKeys = KeysOfType<User, string>; // 'name' | 'email'

// 8. 함수 오버로드에서 never 사용
function createElement(tag: "div"): HTMLDivElement;
function createElement(tag: "span"): HTMLSpanElement;
function createElement(tag: "button"): HTMLButtonElement;
function createElement(tag: never): never;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

// 9. 빈 배열 타입 (실제로는 never[])
type EmptyArray = never[];

// 10. 에러 바운더리에서 사용
class ErrorBoundary {
  componentDidCatch(error: Error, errorInfo: any): never {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // 에러를 다시 던져서 상위에서 처리하도록 함
    throw error;
  }
}

// 11. 타입 레벨에서 조건부 분기
type IsNever<T> = [T] extends [never] ? true : false;

type Test1 = IsNever<never>; // true
type Test2 = IsNever<string>; // false

// 12. 유틸리티 타입에서 never 활용
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

interface Config {
  required: string;
  optional?: number;
  another?: boolean;
}

type Optional = OptionalKeys<Config>; // 'optional' | 'another'

// 13. 함수에서 절대 반환하지 않는 경우
const assertNever = (value: never): never => {
  throw new Error(`Unexpected value: ${value}`);
};

// 14. 빈 객체 타입
type EmptyObject = Record<string, never>;

// 15. 조건부 타입에서 분기 제어
type ReturnTypeOrNever<T> = T extends (...args: any[]) => infer R ? R : never;

type FuncReturn = ReturnTypeOrNever<() => string>; // string
type NotFuncReturn = ReturnTypeOrNever<number>; // never
