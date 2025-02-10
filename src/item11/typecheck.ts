interface Room {
  numDoors: number;
  numWindows: number;
}
// 잉여 속성 체크
const r: Room = {
  numDoors: 1,
  numWindows: 2,
  height: 3, // Error: Property 'height' does not exist on type 'Room'
};
const obj = {
  numDoors: 1,
  numWindows: 2,
  height: 3,
};

// 잉여 속성 체크는 오직 객체 리터럴에만 적용됨
// 구조적 타이핑 관점에서는 오류가 발생하지 않음
// obj는 Room 타입의 부분집합을 포함하므로 Room 타입으로 할당할 수 있음
const r2: Room = obj;
