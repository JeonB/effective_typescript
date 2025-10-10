/* find와 filter의 차이 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findResult = nums.find((num) => num % 2 === 0);

const filterResult = nums.filter((num) => num % 2 === 0);

console.log(findResult);
console.log(filterResult);




