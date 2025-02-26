const item19 = () => {
  let x: number = 10; //불필요한 타입 선언
  let y = 10; // 이정도만 해도 충분

  const person: { name: string; age: number } = { name: "Jane", age: 22 }; //불필요한 타입 선언
  const person2 = { name: "Jane", age: 22 }; // 이정도만 해도 충분

  /* 잉여속성 체크를 위해 타입 추론이 가능해도 타입 선언을 하는 것이 좋은 경우 */
  interface Product {
    id: string;
    name: string;
    price: number;
  }

  // 타입을 명시하지 않으면 해당 값이 사용된 곳에서만 에러가 발생함을 알 수 있다.
  const furby = {
    id: 123456,
    name: "퍼비",
    price: 20000,
  };

  function logProduct(product: Product) {
    const { id, name, price } = product;
    console.log(id, name, price);
  }

  logProduct(furby); // 에러 발생. 타입을 명시하지 않으면 해당 값이 사용된 곳에서만 에러가 발생함을 알 수 있다.

  const furby2: Product = {
    // 사전에 잉여속성 체크를 하여 에러를 방지할 수 있다.
    id: "123456",
    name: "퍼비",
    price: 20000,
  };

  logProduct(furby2);

  const cache: { [ticker: string]: number } = {};

  // 함수의 반환타입은 명시하는 것이 좋다
  function getQuote(ticker: string): Promise<number> {
    if (ticker in cache) return cache[ticker];

    return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then((response) => response.json())
      .then((quote) => {
        cache[ticker] = quote;
        return quote;
      });
  }

  // async/await 함수가 Promise 오류를 피하는데 효과적
  async function getQuote2(ticker: string): Promise<number> {
    if (ticker in cache) return cache[ticker];

    const response = await fetch(`https://quotes.example.com/?q=${ticker}`);
    const quote = await response.json();
    cache[ticker] = quote;
    return quote;
  }
};
