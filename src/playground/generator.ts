/**
 * 예시: 간단한 숫자 배열을 생성하는 제네레이터
 */
function* numberGenerator(limit: number) {
  for (let i = 0; i < limit; i++) {
    yield i;
  }
}

// 사용 예시
const gen = numberGenerator(5);
for (const num of gen) {
  console.log(num); // 0, 1, 2, 3, 4 출력
}

/**
 * 예시: 배열의 아이템을 하나씩 반환하는 제네레이터
 */
function* arrayItemGenerator<T>(items: T[]) {
  for (const item of items) {
    yield item;
  }
}

// 사용 예시
const items = ["a", "b", "c"];
const itemGen = arrayItemGenerator(items);
console.log(itemGen.next().value); // 'a'
console.log(itemGen.next().value); // 'b'
console.log(itemGen.next().value); // 'c'
