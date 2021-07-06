/**
 * TODO : Các kiểu dữ liệu nâng cao
 * ? Intersection type
 * ? Type guard
 * ? Type casting
 */
let num;
num = 20;
let un = 20;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("Hello", "Tuan"));
// console.log(add(true, "Tuan")); báo lỗi vì true không thuộc type Combine
console.log(add(29, 08));
function printEmployeeInformation(emp) {
    if ("name" in emp) {
        console.log('name : ', emp.name);
    }
    if ("date" in emp) {
        console.log('date :', emp.date);
    }
}
let unk = {
    name: 'tuan',
    age: 20,
    role: 'admin'
};
let unk_02 = {
    name: 'Trang',
    age: 20,
    role: 'employee',
    date: '30/09/2020'
};
let res = printEmployeeInformation(unk_02);
console.log(res);
console.log(printEmployeeInformation(unk));
// console.log(printEmployeeInformation(unk_02));
/**
 * TODO : Ví dụ instanceof và class
*/
class Car {
    drive() {
        console.log(`Driving...`);
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(29);
    }
}
console.log(useVehicle(v1));
console.log(useVehicle(v2));
/**
 * * T3 : Type casting : cho phép chuyển đổi một biến từ kiểu này sang kiểu khác
 * * sử dụng từ khóa as hoặc toán tử <>
 */
let input = document.querySelector("input[type=text]");
// hoặc 
let inputEl = document.querySelector("input[type=text]");
