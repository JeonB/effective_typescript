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

// 6. findIndex: 특정 조건을 만족하는 첫 번째 요소의 인덱스 반환
const firstEvenIndex = nums.findIndex((num) => num % 2 === 0);
console.log("findIndex 결과:", firstEvenIndex); // 1

// 7. slice: 배열의 일부 구간을 잘라내어 새 배열 반환
const sliced = nums.slice(3, 7);
console.log("slice 결과:", sliced); // [4, 5, 6, 7]

// 8. splice: 배열의 특정 부분을 제거/추가하며 원본 배열 변경
const numsCopy = [...nums];
const spliced = numsCopy.splice(2, 3, 100, 200);
console.log("splice 결과(제거된 요소):", spliced); // [3, 4, 5]
console.log("splice 결과(수정된 배열):", numsCopy); // [1,2,100,200,6,7,8,9,10]

// 9. sort: 배열 정렬 (기본적으로 문자열 기준, 숫자는 비교 함수 필요)
const unsorted = [12, 4, 19, 1, 8];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("sort 결과:", sorted); // [1, 4, 8, 12, 19]

// 10. flat: 다차원 배열을 1차원으로 평탄화
const nested = [1, [2, [3, 4]], 5];
const flattened1 = nested.flat(1);
const flattened2 = nested.flat(2);
console.log("flat 결과(1단계):", flattened1); // [1, 2, [3, 4], 5]
console.log("flat 결과(2단계):", flattened2); // [1, 2, 3, 4, 5]
