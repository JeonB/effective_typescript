interface ScatterProps {
  xs: number[];
  ys: number[];

  xRange: [number, number];
  yRange: [number, number];
  color: string;

  onClick: (x: number, y: number, index: number) => void;
  // 새로운 속성을 추가할 때마다 REQUIRES_UPDATE에 값을 추가해야 한다.
  //   onDoubleClick: (x: number, y: number, index: number) => void;
}

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (REQUIRES_UPDATE[k] && oldProps[k] !== newProps[k]) {
      return true;
    }
  }
  return false;
}
