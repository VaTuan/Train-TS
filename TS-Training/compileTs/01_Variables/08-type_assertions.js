// TYPE ASSERTIONS
// ==> Mục đích là chuyển qua lại các kiểu dữ liệu 
// example 01 : 
let nVariable = 'TypeScript training';
// let totalLength = nVariable.length ;   // => Vì nVariable là kiểu any nên nó sẽ không hiểu .length, nếu muốn nó hiểu được thì phải viết như dòng bên dưới
// Cách 1:
let totalLengthC1 = nVariable.length;
console.log('total length of string C1 : ', totalLengthC1);
// Cách 2: dùng as
let totalLengthC2 = nVariable.length;
console.log('total length of string C2 : ', totalLengthC2);
