const xs = [1, 2, 3];
const x0 = xs[0];
const x1 = xs["1"]; // 뭔짓을해도 타입체커가 오류라고 인식 못 함.

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i < xs.length) {
    return xs[i];
  }

  throw new Error(`Out of bounds access: ${i}`);
}

const tupleLike: ArrayLike<string> = {
  "0": "a",
  "1": "b",
  length: 2,
};

console.log(checkedAccess(tupleLike, 1));
type LengthType = (typeof tupleLike)["length"];
