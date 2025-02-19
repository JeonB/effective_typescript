const item3 = () => {
  // 런타임 환경에서는 타입이 지워지므로 아래 코드는 적용안됨
  function asNumber(val: number | string): number {
    return val as number;
  }

  // 올바른 예시
  function asNumber2(val: number | string): number {
    return typeof val === "string" ? parseInt(val) : val;
  }
};
