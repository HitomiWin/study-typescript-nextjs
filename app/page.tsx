type Foo = {
  a: number;
  b: string;
};
type Bar = {
  a: string;
  c: boolean;
};
// This is intersection types
// type FooBar = Foo & Bar;
// const Test: FooBar ={
//   a:1,
//   b:"",
//   c:true
// }
const test: Foo | Bar = {
  a: 1,
  b: "",
  c: true,
};

if ("b" in test) {
  test.a.toFixed();
}

interface A {
  a: number;
}
interface AB extends A {
  b: string;
}

type AT = {
  at: number;
};

type ABT = AT & {
  bt: string;
};

export default function Home() {
  const foo = "foo" as const;
  let bar = foo; // assertion
  function double(x: number): number | undefined {
    if (x > 0) {
      return;
    }
    return x * 2;
  }

  const nrArr: (number | string)[] = [1, 2, "3"];
  const tupleArr: [string, number] = ["foo", 1];
  // let obj1: {} = true; // {} is not object
  // let obj2: object = []; // object means it's not primitive type
  let obj3: Record<string, unknown> = {}; // never instead of unknown means empty {}
  //index signature
  let obj4: { [key: string]: unknown } = {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>test</div>
    </main>
  );
}
