//==> VOID
// thường được sử dụng khi quyết định kiểu trả về của 1 function nào đó 
// vd hàm không có giá trị trả về 
// ==> trong trường hợp 1 phương thức(func) không có giá trị trả về thì dùng void
function sayHello() {
    console.log('hello, word');
}
sayHello();
// vd hàm có giá trị trả về là 1 number
const sum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};
const result = sum([1, 2, 3, 4, 5]);
console.log(result);
// vd hàm có giá trị trả về là 1 string
function goodMorning(myLove) {
    return `Good Morning ${myLove}`;
}
console.log(goodMorning('Vũ Anh Tuấn'));
