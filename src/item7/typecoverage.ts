const item7 = () => {
  // unit type 가장 작은 집합
  type A = "A";
  type B = "B";
  type Twelve = 12;

  // 두 개 이상의 타입을 묶으려면 유니온 타입을 사용
  type AB = "A" | "B";
  type AB12 = "A" | "B" | 12;

  interface Person {
    name: string;
  }
  interface Lifespan {
    birth: Date;
    death?: Date;
  }
  type PersonSpan = Person & Lifespan; // 교차 타입. 두 타입을 모두 만족해야 함. 겹치는 속성을 생각하면 안 됨

  const ps: PersonSpan = {
    name: "Tom",
    birth: new Date("1980-01-01"),
    death: new Date("2050-01-01"),
  };

  let double: [number, number] = [1, 2];
  let triple: [number, number, number] = [1, 2, 3];

  // double = triple;
  // triple = double;
};
