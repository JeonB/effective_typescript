/* find와 filter의 차이 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findResult = nums.find((num) => num % 2 === 0);

const filterResult = nums.filter((num) => num % 2 === 0);

console.log(findResult);
console.log(filterResult);

// 1. map: 배열의 각 요소를 변환하여 새 배열 반환
const mapped = nums.map((num) => num * 2);
console.log("map 결과:", mapped); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 2. some: 조건을 만족하는 요소가 하나라도 있는지 확인
const hasGreaterThanFive = nums.some((num) => num > 5);
console.log("some 결과:", hasGreaterThanFive); // true

// 3. every: 모든 요소가 조건을 만족하는지 확인
const allAreOdd = nums.every((num) => num % 2 === 1);
console.log("every 결과:", allAreOdd); // false

// 4. reduce: 배열 값을 누적하여 하나의 값으로 반환
const sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log("reduce 결과(합계):", sum2); // 55

// 5. includes: 배열에 특정 값이 포함되어 있는지 확인
const includesSeven = nums.includes(7);
console.log("includes 결과:", includesSeven); // true
