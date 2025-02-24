declare let hasMiddle: boolean;

const item23 = () => {
  interface Point {
    x: number;
    y: number;
  }
  // 한번에 선언하기
  const pt: Point = {
    x: 3,
    y: 4,
  };

  const id = { name: "jeonb" };
  // 안전한 객체 속성 추가방법
  const namedPoint = { ...pt, ...id };

  const nameTitle = { name: "jeonb", title: "developer" };
  const career = {
    ...nameTitle,
    ...(hasMiddle ? { middleName: "middle", wage: "500" } : {}),
  };

  // 헬퍼 함수를 이용한 객체 속성 추가방법
  function addOptional<T extends object, U extends object>(
    obj1: T,
    obj2: U | null
  ): T & Partial<U> {
    return { ...obj1, ...obj2 };
  }

  const pharaoh = addOptional(
    nameTitle,
    hasMiddle ? { middleName: "middle", wage: "500" } : null
  );
};
