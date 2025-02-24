const item24 = () => {
  interface Coordinate {
    x: number;
    y: number;
  }
  interface BoundingBox {
    x: [number, number];
    y: [number, number];
  }
  interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
  }

  // 제어 흐름을 방해하는 box 변수
  function ispointInPolygon(pt: Coordinate, poly: Polygon): boolean {
    const box = poly.bbox;
    if (
      poly.bbox &&
      (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[0] || pt.y > box.y[1])
    ) {
      return false;
    }
    return true;
  }
  function ispointInPolygon2(pt: Coordinate, poly: Polygon): boolean {
    const box = poly.bbox;
    if (
      box &&
      (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[0] || pt.y > box.y[1])
    ) {
      return false;
    }
    return true;
  }
  // 객체 비구조화 할당을 이용한 개선
  function ispointInPolygon3(pt: Coordinate, poly: Polygon): boolean {
    const { bbox } = poly;
    if (bbox) {
      const { x, y } = bbox;
      if (pt.x < x[0] || pt.x > x[1] || pt.y < y[0] || pt.y > y[1]) {
        return false;
      }
    }
    return true;
  }
};
