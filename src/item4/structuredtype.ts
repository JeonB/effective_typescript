const item4 = () => {
  interface Vector3D {
    x: number;
    y: number;
    z: number;
  }

  function calculateLength(v: Vector3D) {
    let length = 0;

    for (const axis of Object.keys(v)) {
      const cooord = v[axis]; // 타입스크립트는 구조적 타이핑을 모델링하므로 v에 {x: 1, y: 2, z: 3 , note : "what is this"} 이외의 다른 속성이 있을 수 있다. 이 속성이 string 처럼 Vector3D에 정의된 타입이 아니라서 에러가 발생한다.
      length += Math.abs(cooord);
    }
  }

  interface Author {
    first: string;
    last: string;
  }
  interface DB {
    runQuery: (sql: string) => any[];
  }

  // 실제 데이터베이스에서도 runQuery 메서드를 사용하므로 테스트 가능
  function getAuthors(database: DB): Author[] {
    const authorRows = database.runQuery("SELECT FIRST, LAST FROM AUTHORS");
    return authorRows.map((row) => ({ first: row[0], last: row[1] }));
  }

  test("getAuthors", () => {
    const database = {
      runQuery: (sql: string) => [
        ["Toni", "Morrison"],
        ["Maya", "Angelou"],
      ],
    };
    const authors = getAuthors(database);
    expect(authors).toEqual([
      { first: "Toni", last: "Morrison" },
      { first: "Maya", last: "Angelou" },
    ]);
  });
};
