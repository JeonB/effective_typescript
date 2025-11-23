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

/**
 * 예시: 문자열을 한 글자씩 반환하는 제네레이터
 */
function* stringCharGenerator(str: string) {
  for (const char of str) {
    yield char;
  }
}

// 사용 예시
const charGen = stringCharGenerator("타입스크립트");
console.log(charGen.next().value); // '타'
console.log(charGen.next().value); // '입'
console.log(charGen.next().value); // '스'
console.log(charGen.next().value); // '크'
console.log(charGen.next().value); // '립'
console.log(charGen.next().value); // '트'

/**
 * 예시: 제네레이터를 사용한 무한 시퀀스 (초기값, 증가값)
 */
function* infiniteSequence(start: number = 0, step: number = 1) {
  let i = start;
  while (true) {
    yield i;
    i += step;
  }
}

// 사용 예시
const seq = infiniteSequence(10, 2);
console.log(seq.next().value); // 10
console.log(seq.next().value); // 12
console.log(seq.next().value); // 14

/**
 * 예시: 제네레이터로 객체 프로퍼티 순회
 */
function* objectEntriesGenerator<T extends object>(obj: T) {
  for (const key of Object.keys(obj) as Array<keyof T>) {
    yield [key, obj[key]];
  }
}

// 사용 예시
const user = { name: "Kim", age: 28 };
const objGen = objectEntriesGenerator(user);
console.log(objGen.next().value); // ['name', 'Kim']
console.log(objGen.next().value); // ['age', 28]
