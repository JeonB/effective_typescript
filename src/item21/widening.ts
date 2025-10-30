const item21 = () => {
  interface Vector3D {
    x: number;
    y: number;
    z: number;
  }

  const getComponent = (vector: Vector3D, axis: "x" | "y" | "z") => {
    return vector[axis];
  };

  const vector = { x: 10, y: 20, z: 30 };
  const axis = "x"; // let 으로 선언된 axis변수는 'x'|'y'|'z' 타입 이외에도 다른 타입을 가질 수 있다. const 로 선언된 변수는 타입을 좁혀서 사용할 수 있다.

  const component = getComponent(vector, axis);
  console.log(component);

  const obj = { x: 10, y: 20, z: 30 };

  obj.x = "ss"; // number 타입만 할당 가능
  obj.a = 123; // a 속성이 없으므로 에러

  /* const 단언문으로 타입 추론 강도 조절 */
  const v1 = {
    x: 1,
    y: 2,
  };

  const v2 = {
    x: 1 as const,
    y: 2,
  };

  const v3 = {
    x: 1,
    y: 2,
  } as const;

  const a1 = [1, 2, 3];
  const a2 = [1, 2, 3] as const; // const 단언문은 최대한 좁은 타입으로 추론하게 만든다
};

item21();
