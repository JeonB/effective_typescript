/* Promise 객체 반환환 */
function someAsyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

function main() {
  const result = someAsyncTask();
  console.log(result);
}

main();

/* Promise 체이닝 */
function main2() {
  someAsyncTask()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

main2();

/* 비동기 코드를 동기 코드처럼 작성 */
async function main3() {
  try {
    const result = await someAsyncTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main3();

// 1. async 함수에서 값 반환
async function fetchNumber(): Promise<number> {
  return 42;
}

async function example1() {
  const value = await fetchNumber();
  console.log("example1:", value); // 42
}
example1();

// 2. 에러 핸들링 (try-catch)
async function fetchWithError(): Promise<string> {
  throw new Error("예상치 못한 에러 발생");
}

async function example2() {
  try {
    const value = await fetchWithError();
    console.log("example2:", value);
  } catch (error) {
    console.error("example2 error:", error);
  }
}
example2();

// 3. 여러 Promise 순차 처리
async function delayedValue(value: number, ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function example3() {
  const first = await delayedValue(1, 500);
  const second = await delayedValue(2, 500);
  const third = await delayedValue(3, 500);
  console.log("example3:", first, second, third);
}
example3();

// 4. Promise.all과 async/await
async function example4() {
  const promises = [
    delayedValue(10, 300),
    delayedValue(20, 200),
    delayedValue(30, 100),
  ];
  const results = await Promise.all(promises);
  console.log("example4:", results); // [10, 20, 30]
}
example4();

// 5. fetch API와 async/await 사용 (mock 예제)
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("네트워크 응답에 문제가 있습니다.");
  }
  return response.json();
}

async function example5() {
  try {
    const todo = await fetchTodo();
    console.log("example5:", todo.title);
  } catch (error) {
    console.error("example5 error:", error);
  }
}
example5();
