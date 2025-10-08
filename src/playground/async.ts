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
