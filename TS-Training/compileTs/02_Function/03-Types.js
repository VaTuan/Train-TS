// CÁC DẠNG VIẾT FUNCTION TRONG TS
// Cách 1: 
function userInfor01(name, age) {
    return `My name is ${name}, ${age} years old`;
}
// cách 2 : 
let userInfor02 = function (name, age) {
    return `My name is ${name}, ${age} years old`;
};
// cách 3: cách này ít dử dụng
let userInfor03 = function (name, age) {
    return `My name is ${name}, ${age} years old`;
};
console.log(userInfor01('Vũ Anh Tuấn', 22));
console.log(userInfor02('Thanh Thùy', 21));
console.log(userInfor03('Anh Tuấn', 23));
