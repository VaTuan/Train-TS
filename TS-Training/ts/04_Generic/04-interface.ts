/**
 * * gerneric Interface
 */
interface IProcessor<T, U> {
  result: T;
  process(a: T, b: U): U;
}

let process: IProcessor<string, number> = {
  result: "done",
  process() {
    return 5;
    console.log("done");
  },
};

/**
 * * Generic Interface như là 1 function
 */
interface IKeyValueProcess<T, U> {
  (key: T, value: U): void;
}
