const item27 = () => {
  function regularFunction() {
    console.log("regularFunction");
  }

  type arrow = {
    (a: number, b: number): number;
  };

  function regularFunction2() {
    return 1 + 2;
  }
  const arrowFunction: arrow = (a, b) => a + b;
  const arrowFunction2 = () => {
    return 1 + 2;
  };

  const obj = {
    value: 1,
    test: function fn() {
      console.log(this.value);
    },
  };
  function regu() {
    console.log(arguments);
  }
  regu(1, 2, 3, 6);
};
