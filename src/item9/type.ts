export type Person = {
  name: string;
};

const chris: Person = { name: "Chris" };
const sarah = { name: "Sarah" } as Person;

// 단언보다는 선언을 사용하는 것이 좋다.
const alice: Person = {}; // 오류 발생
const bob = {} as Person; // 정상

const people: Person[] = ["chris", "sarah", "alice", "bob"].map(
  (name): Person => ({ name })
);

// 타입스크립트보다 타입 정보를 더 잘 알고 있는 경우에만 단언 사용
document.querySelector("#myButton")?.addEventListener("click", (e) => {
  e.currentTarget; // 타입은 EventTarget
  const button = e.currentTarget as HTMLButtonElement;
  button; // 타입은 HTMLButtonElement. EventTarget의 서브타입
});

// 마지막에 사용하는 !는 타입스크립트에게 null이나 undefined가 아님을 단언
const elNull = document.getElementById("foo");
const elNonNull = document.getElementById("foo")!;
// 의도적으로 서로의 서브타입이 아닌 타입을 단언하는 경우 unknown을 사용
const body = document.body;
const el = body as unknown as Person;
