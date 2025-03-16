const item32 = () => {
  // FillLayout이면서 LinePaint인 경우가 생길 수 있다
  // 인터페이스 속성에 유니온 타입을 사용하는 건 지양해야한다.
  interface Layer {
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
  }

  // 각 타입의 계층 분리. 태그된 유니온
  interface FillLayer {
    type: "fill";
    layout: FillLayout;
    paint: FillPaint;
  }

  interface LineLayer {
    type: "line";
    layout: LineLayout;
    paint: LinePaint;
  }

  interface PointLayer {
    type: "point";
    layout: PointLayout;
    paint: PointPaint;
  }

  type improvedLayer = FillLayer | LineLayer | PointLayer;

  function drawLayer(layer: improvedLayer) {
    if (layer.type === "fill") {
      const { paint } = layer;
      const { layout } = layer;
    } else if (layer.type === "line") {
      const { paint } = layer;
      const { layout } = layer;
    } else if (layer.type === "point") {
      const { paint } = layer;
      const { layout } = layer;
    }
  }
  interface Person {
    name: string;
    placeOfBirth?: string;
    dateOfBirth?: string;
  }
  interface improvedPerson {
    name: string;
    birth?: {
      place: string;
      date: string;
    };
  }
};
