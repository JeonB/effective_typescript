const item31 = () => {
  // 설계적 결함이 있는 코드. undefined를 포함하는 객체는 사용하지 말 것
  function extent(nums: number[]) {
    let min, max;
    for (let num of nums) {
      if (!min) {
        min = num;
        max = num;
      } else {
        min = Math.min(min, num);
        max = Math.max(max, num);
      }
    }
    return [min, max];
  }

  function extent2(nums: number[]) {
    let result: [number, number] | null = null;
    for (const num of nums) {
      if (!result) {
        result = [num, num];
      } else {
        result = [Math.min(result[0], num), Math.max(result[1], num)];
      }
    }
    return result;
  }
};
