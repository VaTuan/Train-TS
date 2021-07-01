function showNumberInfor(x) {
    return x;
}
function showStringInfor(y) {
    return y;
}
// cách viết generic trong TS
/**
 * * single type variable
 */
function showInfor(x) {
    return x;
}
showInfor(true);
showInfor(10);
showInfor('Tuan');
/**
 * * Từ khóa extends : giới hạn phạm vi của type variable
 */
function identity(arg) {
    return arg;
}
// let resIdentity = identity(1) báo lỗi vì 1 không thuộc kiểu object
let resIdentity_02 = identity({ name: 'tuan' });
/**
 * * Default value
 */
function getAgeEmp(age) {
    return age;
}
let ageEmp = getAgeEmp({ name: 'tuan', age: 21 });
let ageEmp_02 = getAgeEmp('20');
/**
 * * Multiply variable
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ abc: 'tuan' }, 32));
console.log(merge({ name: 'tuan', age: 20 }, { name: 'trang' }));
/**
 * * Array method
 */
function displayName(names) {
    return names.join(", ");
}
console.log(displayName(['vu', 'anh', 'tuan']));
// console.log(displayName<number>(['vu', 'anh', 'tuan'])); sẽ báo lỗi vì được quy định là 1 mảng các number
/**
 * * keyof Constraits (ràng buộc)
 */
function getProperty(obj, key) {
    return obj[key];
}
let emp_01 = {
    name: 'Tuan',
    age: 20
};
console.log(getProperty(emp_01, "name"));
