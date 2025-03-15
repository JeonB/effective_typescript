const item30 = () => {
  // 아래 코드는 주석과 일치하지 않고 너무 장황한 설명이 있음
  /*
    전경색 문자열 반환
    0개 또는 1개의 매개변수를 받음
    매개변수가 없을 때는 표준 전경색 반환
    매개변수가 있을 때는 특정 페이지의 전경색 반환
    */
  function getForegroundColor(page?: string): string {
    return page === "login" ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
  }

  // 쓸데없는 주석 삭제 및 확실한 반환 타입을 명시
  function getForegroundColor2(page?: string): Color {}
};
