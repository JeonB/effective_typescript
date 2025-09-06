const item3 = () => {
  /*  태그된 유니온 */
  interface Square {
    kind: "square";
    size: number;
  }
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  type Shape = Square | Rectangle;

  function area(s: Shape) {
    if (s.kind === "square") {
      s; // 타입이 Square로 추론됨
      return s.size * s.size;
    }
    {
      s; // 타입이 Rectangle로 추론됨
      return s.width * s.height;
    }
  }
  //--------------------------------

  /* 타입 추론 */
  // 런타임 환경에서는 타입이 지워지므로 아래 코드는 적용안됨
  function asNumber(val: number | string): number {
    return val as number; // 코드 실행 시 string 타입으로 반환됨
  }

  console.log(typeof asNumber("123"));

  // 올바른 예시
  function asNumber2(val: number | string): number {
    return typeof val === "string" ? parseInt(val) : val;
  }
  console.log(typeof asNumber2("123")); // number 타입으로 반환됨
};

console.log(item3());
