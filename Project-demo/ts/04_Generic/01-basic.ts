function showNumberInfor(x: number): number {
    return x;
}
function showStringInfor(y: string): string {
    return y;
}

// cách viết generic trong TS
/**
 * * single type variable
 */
function showInfor<T>(x: T): T {
    return x;
}
showInfor<boolean>(true);
showInfor<number>(10);
showInfor<string>('Tuan');

/**
 * * Từ khóa extends : giới hạn phạm vi của type variable
 */
function identity<T extends object>(arg: T): T {
    return arg;
}
// let resIdentity = identity(1) báo lỗi vì 1 không thuộc kiểu object
let resIdentity_02 = identity({ name: 'tuan' })

/**
 * * Default value
 */

function getAgeEmp<T = number>(age: T): T {
    return age
}
let ageEmp = getAgeEmp<object>({ name: 'tuan', age: 21 })
let ageEmp_02 = getAgeEmp<string>('20')

/**
 * * Multiply variable
 */

function merge<T, U>(objA: T, objB: U)  {
    return Object.assign(objA, objB)
}
console.log(merge<object, number>({abc : 'tuan'}, 32));
console.log(merge<object, object>({name : 'tuan', age : 20}, {name  : 'trang'}));

/**
 * * Array method
 */

function displayName<T>(names : T[]){
    return names.join(", ")
}
console.log(displayName<string>(['vu', 'anh', 'tuan']));
// console.log(displayName<number>(['vu', 'anh', 'tuan'])); sẽ báo lỗi vì được quy định là 1 mảng các number

/**
 * * keyof Constraits (ràng buộc)
 */

function getProperty<T, K extends keyof T>(obj: T, key : K){
 return obj[key]
}
type OneEmp = {
    name? : string, age: number,
}
let emp_01: OneEmp = {
    name:'Tuan', 
    age : 20
}
console.log(getProperty(emp_01, "name"));
