function codingapple() {
  let name: string = "codingapple";
  // name = 123;

  let 이름: string | number = "kim";

  type Name = "jeon" | "kim"; // 리터럴 타입
  let 이름2: Name = "jeon";
  //   이름2 = 'park';

  function 함수명(x: number): number {
    return x * 2;
  }

  type 함수타입 = (x: number) => number;
  const 함수2: 함수타입 = (x) => x * 2;

  //에러
  function func1(x: number | string) {
    return x * 2; // 에러
  }

  //가능
  function func2(x: number | string) {
    if (typeof x === "number") {
      return x * 2;
    }
  }

  //튜플
  type Member = [number, boolean];
  let john: Member = [100, false];

  type MyObject = {
    name?: string;
    age: number;
  };
  interface MyObject2 {
    name?: string;
    age: number;
  }
  let 철수: MyObject | MyObject2 = {
    name: "kim", // 선택적 속성
    age: 50,
  };

  // 어떤 속성이 들어갈지 모를 때 인덱스 시그니처 사용
  type MyObject3 = {
    [key: string]: number;
  };
  let 영희: MyObject3 = {
    age: 50,
    weight: 100,
  };

  class Person {
    name;
    constructor(name: string) {
      this.name = name;
    }
  }
}
