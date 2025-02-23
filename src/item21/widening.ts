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
  let axis = "x";

  const component = getComponent(vector, axis); // let 으로 선언된 axis변수는 'x'|'y'|'z' 타입 이외에도 다른 타입을 가질 수 있다.
  console.log(component);
};
