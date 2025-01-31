type Options = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

function get(url: string, opts: Options): Promise<Response> {
  return fetch(url, opts);
}

function post(url: string, opts: Options): Promise<Response> {
  return fetch(url, opts);
}

type HttpFunction = (url: string, opts: Options) => Promise<Response>;
const get1: HttpFunction = (url, opts) => fetch(url, opts);
const post1: HttpFunction = (url, opts) => fetch(url, opts);

interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate extends Person {
  birth: Date;
}
type PersonWithBirthDate1 = Person & { birth: Date };

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};
// type Pick<T, K> = { [k in K]: T[k] };
// Pick은 T와 K 두가지 타입을 받아서 결과 타입 반환
type TopNavState1 = Pick<State, "userId" | "pageTitle" | "recentFiles">;

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "white",
  label: "VGA",
};
type Options1 = typeof INIT_OPTIONS; // 값의 타입을 통해 타입을 추출

interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];
const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
];
// const couple2: DancingDuo<{first:string}> = [{first:"a"},{first:"b"}]; // last가 없어서 에러

// extends를 사용하면 타입을 제한할 수 있다. 확장이 아닌 부분 집합
type Pick2<T, K extends keyof T> = {
  [k in K]: T[k];
};
