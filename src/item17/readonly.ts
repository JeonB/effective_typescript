function printTriangles(n: number) {
  let nums: number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}
printTriangles(5);

function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function parseTageedTexts(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  let currPara: readonly string[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push([...currPara]);
      currPara = [];
    }
  };
  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara = currPara.concat(line);
    }
  }
  addParagraph();
  return paragraphs;
}
