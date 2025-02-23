const item22 = () => {
  const el = document.getElementById("item22"); // HTMLElement | null
  // 대표적인 null 체크 방법
  if (el) {
    el;
    el.innerHTML = "Narrowing";
  } else {
    el;
    alert("Element not found!");
  }

  const el2 = document.getElementById("item22-2"); // HTMLElement | null
  if (!el2) throw new Error("Element not found!");
  el2;
  el2.innerHTML = "Narrowing";

  function contains(text: string, search: string | RegExp): boolean {
    if (search instanceof RegExp) {
      return !!text.match(search);
    }
    search; // string
    return text.includes(search);
  }

  // 잘못 좁힌 사례
  function foo(x?: number | string | null) {
    if (!x) {
      x; // string | number | null | undefined . 빈문자열과 0은 false로 간주되어 타입이 좁혀지지 않음
    }
  }

  // 타입 식별을 돕기 위한 커스텀 함수. 타입가드
  function isDefined<T>(arg: T | undefined): arg is T {
    return arg !== undefined;
  }

  const jackson5 = ["Michael", "Tito", "Jackie", "Marlon", "Jermaine"];
  const members = ["Janet", "John"]
    .map((who) => jackson5.find((n) => n === who))
    .filter(isDefined);
};
