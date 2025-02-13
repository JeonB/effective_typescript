const item8 = () => {
  class Rectangle {
    width = 3;
    height = 4;
  }
  // 클래스는 타입과 값으로 동작. 여기서는 타입으로 사용됨
  function calculatedVolume(shape: unknown) {
    if (shape instanceof Rectangle) {
      shape;
      shape.width;
    }
  }
  type t1 = "example"; // 문자열 리터럴 타입. example만 할당 가능
  const t2 = "example"; // 문자열 리터럴 값
  const t3: t1 = t2;
  console.log(typeof t3); // typeof는 런타임에 동작하는 JavaScript 내장 연산자이므로 string
  // 구조 분해 할당
  function email(options: {
    recipient: Person;
    subject: string;
    body: string;
  }) {
    // ...
  }
  // 값의 관점에서 타입이 해석되어 오류 발생
  function uncorrectTypeEmail({
    recipient: Person,
    subject: string,
    body: string,
  }) {
    // ...
  }
  // 타입과 값을 구분해야 에러가 발생하지 않음
  function correctTypeEmail({
    recipient,
    subject,
    body,
  }: {
    recipient: string;
    subject: string;
    body: string;
  }) {
    // ...
  }
};
item8();
