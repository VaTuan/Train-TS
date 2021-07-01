/**
 * TODO : Các kiểu dữ liệu nâng cao
 * ? Intersection type
 * ? Type guard
 * ? Type casting 
 */


/** 
 ** T1 : Intersection type : giao (intersection ) các kiểu dữ liệu lại với nhau 
 ** Kiểu intersection sẽ có tất cả các thuộc tính từ hai kiểu giao nhau
*/

type Combinable = string | number;
type Numberic = number | boolean;

let num: Combinable;
num = 20;

// num = true; 
//  báo lỗi vì num chỉ nhận 2 kiểu dữ liệu là string và number
/**
 *Thể hiện bằng kí tự `&` hiểu là giao giữa hai kiểu dữ liệu là Combinable và Numberic 
 */
type Universal = Combinable & Numberic;

let un: Universal = 20;
// let un_02 : Universal = 'Tuan dz'  lỗi vì Univarsal chỉ nhận kiểu number là giao giữa Combinable và Numberic

/* =================================***=====================================================
/** 
 * * T2 : Type guard : cho phép thu hẹp type(loại) của đối tượng trong khối điều kiện
 * typeof : kiểm tra kiểu
 * instance of : kiểm tra 1 đối tượng có phải là thể hiện của 1 class
 * in : kiểm tra sự tồn tại của thuộc tính trên 1 đối tượng
*/


/**
 *  TODO : ví dụ sử dụng typeof
 */
type Combine = string | number;

function add(a: Combine, b: Combine): Combine {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("Hello", "Tuan"));
// console.log(add(true, "Tuan")); báo lỗi vì true không thuộc type Combine
console.log(add(29, 08));

/** 
 * TODO : ví dụ sử dụng in
*/

type Admin = {
    name: string, age: number, role: 'admin', startDate?: string
}
type Employee = {
    name: string, age: number, role: 'employee', date?: string
}
type UnknowEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknowEmployee) {
    if ("name" in emp) {
        console.log('name : ', emp.name);
    }
    if ("date" in emp) {
        console.log('date :', emp.date);
    }
}


let unk: UnknowEmployee = {
    name: 'tuan',
    age: 20,
    role: 'admin'
}

let unk_02: UnknowEmployee = {
    name: 'Trang',
    age: 20,
    role: 'employee',
    date: '30/09/2020'
}

let res = printEmployeeInformation(unk_02)
console.log(res);

console.log(printEmployeeInformation(unk));
// console.log(printEmployeeInformation(unk_02));

/** 
 * TODO : Ví dụ instanceof và class
*/
class Car {
    drive() {
        console.log(`Driving...`)
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...', amount);
    }
}


type Vehicle = Car | Truck  ;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(29)
    }
}

console.log(useVehicle(v1));
console.log(useVehicle(v2));

/**
 * * T3 : Type casting : cho phép chuyển đổi một biến từ kiểu này sang kiểu khác
 * * sử dụng từ khóa as hoặc toán tử <>
 */
let input = document.querySelector("input[type=text]") as HTMLInputElement
// hoặc 
let inputEl = <HTMLInputElement>document.querySelector("input[type=text]")