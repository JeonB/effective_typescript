const item26 = () => {
  type Language = "TypeScript" | "JavaScript" | "Python" | "Go";
  function setLanguage(lang: Language) {
    // ...
  }
  setLanguage("TypeScript"); // 정상
  let lang = "TypeScript";
  setLanguage(lang); // string으로 추론하여 에러 발생
  const lang2 = "TypeScript";
  setLanguage(lang2); // 상수로 만들거나 타입을 명시하면 오류 해결

  function panTo(where: [number, number]) {
    // ...
  }
  panTo([37.6178, 55.7517]); // 정상
  const loc = [37.6178, 55.7517];
  panTo(loc); // number[]로 추론하여 에러 발생
  const loc2: [number, number] = [37.6178, 55.7517];
  panTo(loc2); // 해결방법1: 타입 명시
  const loc3 = [37.6178, 55.7517] as const;
  function panTo2(where: readonly [number, number]) {
    // ...
  }
  panTo2(loc3); // 해결방법2: 상수 단언과 readonly 사용

  const loc4 = [10, 20, 30] as const;
  panTo2(loc4); // 실제 오류는 loc4에서 발생했지만 호출한 곳에서 발생함. 근본적인 원인 파악 어려움

  interface GovernedLanguage {
    language: Language;
    organization: string;
  }
  function complain(language: GovernedLanguage) {
    // ...
  }
  complain({ language: "TypeScript", organization: "Microsoft" }); // 정상
  const ts = {
    language: "TypeScript",
    organization: "Microsoft",
  };
  complain(ts); // 타입 추론으로 인한 오류 발생. 타입 선언 추가하거나 상수 단언 사용하여 해결

  function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
  }
  // 문맥으로 타입 추론
  callWithRandomNumbers((a, b) => {
    a;
    b;
    console.log(a + b);
  });

  // 콜백 함수를 상수로 뽑아내면 문맥 소실
  const fn = (a, b) => {
    a;
    b;
    console.log(a + b);
  };
  // 표현식에 타입 선언 하여 해결
  const fn2: (n1: number, n2: number) => void = (a, b) => {
    a;
    b;
    console.log(a + b);
  };
  callWithRandomNumbers(fn);
};
