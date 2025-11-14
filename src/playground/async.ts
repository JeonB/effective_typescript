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

// 6. async/await로 순차적 파일명 변환 예시
async function renameFiles(files: string[]): Promise<string[]> {
  // 임의의 비동기 파일명 변경 시뮬레이션
  const renamed = [];
  for (const file of files) {
    const newName = await delayedValue(file.length, 100).then(
      (len) => `renamed_${file}_${len}`
    );
    renamed.push(newName);
  }
  return renamed;
}
renameFiles(["cat.png", "dog.jpg", "bird.gif"]).then((res) =>
  console.log("example6:", res)
);

// 7. async 함수 에러 핸들링: 사용자 데이터 fetch (mock)
type User = {
  id: number;
  name: string;
};
async function fetchUser(id: number): Promise<User> {
  if (id < 0) throw new Error("Invalid user id");
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: `User${id}` }), 200)
  );
}
async function example7() {
  try {
    const user = await fetchUser(1);
    console.log("example7:", user);
    await fetchUser(-1);
  } catch (e) {
    console.error("example7 error:", e);
  }
}
example7();

// 8. async function에서 반복과 병렬 처리 조합
async function fetchValues(ids: number[]): Promise<number[]> {
  return Promise.all(ids.map((id) => delayedValue(id * 10, 100)));
}
fetchValues([1, 2, 3, 4, 5]).then((res) => console.log("example8:", res));

// 9. 비동기 조건 처리 (await와 if/else)
async function isEvenDelayed(num: number): Promise<boolean> {
  const value = await delayedValue(num, 100);
  return value % 2 === 0;
}
async function example9(num: number) {
  if (await isEvenDelayed(num)) {
    console.log(`example9: ${num}는 짝수입니다.`);
  } else {
    console.log(`example9: ${num}는 홀수입니다.`);
  }
}
example9(8);
example9(13);

// 10. async + reduce: 순차 누적 비동기 연산
async function asyncSum(numbers: number[]): Promise<number> {
  return numbers.reduce<Promise<number>>(async (accP, curr) => {
    const acc = await accP;
    const val = await delayedValue(curr, 100);
    return acc + val;
  }, Promise.resolve(0));
}
asyncSum([1, 2, 3, 4, 5]).then((sum) => console.log("example10: 총합 =", sum));
