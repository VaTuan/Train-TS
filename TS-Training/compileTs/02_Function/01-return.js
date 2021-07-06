// Func không có giá trị trả về thì để là kiểu void 
function funcNoReturn() {
    console.log('Func no return');
}
funcNoReturn();
// Func return về number
function funcReturnNumber() {
    return 2;
}
//Func return về array
function funcReturnArr() {
    return ['a', 'b'];
}
// Func retuen về any
// khi mà chưa biết kiểu trả về của func là gì thì ta để là any 
function funcReturnAny() {
    return 'Vũ Anh Tuấn';
}
console.log(funcReturnNumber());
console.log(funcReturnArr());
console.log(funcReturnAny());
