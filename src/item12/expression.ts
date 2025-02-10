// 함수 문장
function rollDice1(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}
// 함수 표현식
const rollDice2 = function (sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
};
// 함수 표현식2
const rollDice3 = (sides: number): number => {
  return Math.floor(Math.random() * sides) + 1;
};

type DiceRollFn = (sides: number) => number;
const rollDice4: DiceRollFn = (sides) => Math.floor(Math.random() * sides) + 1;

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response;
};
