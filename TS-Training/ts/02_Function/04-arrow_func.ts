// ARROW FUNCTION TRONG TS
// hàm mũi tên
// cách khai báo :
// Cách 1: có thể không cần kiểu trả về của function
const sayHi = (name: string) => {
  return `Hello ${name}`;
};
console.log(sayHi("Tuan dz"));

// Cách 2: có kiểu trả về của function
const sayHi01 = (name: string): string => {
  return `Hello ${name}`;
};
console.log(sayHi01("Tuan dz"));

// Cách 3: viết trên 1 dòng
const doubleNumber = (num: number) => num * 2;
console.log(doubleNumber(3));

const decrement = <T, U>(a: T, b: U) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "can not implement";
};
