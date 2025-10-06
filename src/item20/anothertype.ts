const item20 = () => {
  let id = "123456";
  id = 123456; // 에러 발생. 문자열 타입을 기대했지만 숫자 타입을 할당하려고 하였다.

  let id2: string | number = "123456";
  id2 = 123456; // 정상적으로 동작하지만 , id를 사용할 때마다 값이 어떤 타입인 확인해야 함

  // 다른 타입에는 별도의 변수를 사용하는게 바람직하다.
  const id3 = "123456";
  const serial = 12345;

  const id4 = "123456";
  fetchProduct(id4);

  /* 가려지는 변수 */
  const id = "123456";
  const fetchSerialItem = () => {
    const id = 123456; // 혼동을 주기 때문에 다른 타입이 동일한 변수명 사용하면 안 됨.
    return fetchProductBySerialNum(id);
  };
};
