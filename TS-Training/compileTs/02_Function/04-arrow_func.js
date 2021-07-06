// ARROW FUNCTION TRONG TS
// hàm mũi tên
// cách khai báo : 
// Cách 1: có thể không cần kiểu trả về của function
const sayHi = (name) => {
    return `Hello ${name}`;
};
console.log(sayHi('Tuan dz'));
// Cách 2: có kiểu trả về của function
const sayHi01 = (name) => {
    return `Hello ${name}`;
};
console.log(sayHi01('Tuan dz'));
// Cách 3: viết trên 1 dòng 
const doubleNumber = (num) => num * 2;
console.log(doubleNumber(3));
