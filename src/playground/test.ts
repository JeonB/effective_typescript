// 만약 variableTest에 타입을 추가하고 타입가드를 추가하지 않으면 never에서 걸림
const typeguardNever = (variableTest: string | number | boolean): void => {
  if (typeof variableTest === "string") {
    console.log(variableTest);
  } else if (typeof variableTest === "number") {
    console.log(variableTest);
  } else if (typeof variableTest === "boolean") {
    console.log(variableTest);
  } else {
    const unreachable: never = variableTest;
    throw new Error("UnExpected type: " + variableTest);
  }
};
