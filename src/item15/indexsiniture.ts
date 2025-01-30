type Vec3D1 = Record<"x" | "y" | "z", number>; // Record는 키타입에 유연성을 제공하는 제너릭타입
type Vec3D2 = { [k in "x" | "y" | "z"]: number }; // Record와 동일한 타입
type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };
