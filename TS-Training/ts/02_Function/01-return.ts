// Func không có giá trị trả về thì để là kiểu void
function funcNoReturn(): void {
  console.log("Func no return");
}
funcNoReturn();

// Func return về number
function funcReturnNumber(): number {
  return 2;
}
//Func return về array
function funcReturnArr(): string[] {
  return ["a", "b"];
}

// Func retuen về any
// khi mà chưa biết kiểu trả về của func là gì thì ta để là any
function funcReturnAny(): any {
  return "Vũ Anh Tuấn";
}

console.log(funcReturnNumber());
console.log(funcReturnArr());
console.log(funcReturnAny());

let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
let someFunction: () => string;
