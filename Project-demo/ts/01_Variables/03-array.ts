//==> ARRAY
// có 2 cách để khai báo 1 mảng
// khai báo 1 mảng các số nguyên
let arrNumber: Array<number> = [1, 2, 3];
// khai báo 1 mảng các string
let arrString: string[] = ['java', 'android', 'es6']

// khai báo 1 mảng, không có giá trị khởi tạo
let arrString01: string[] = [];
// khai báo 1 mảng mà các phần tử trong mảng có thể có nhiều kiểu dữ liệu
let mixArr: (string | number | boolean | object)[] = []
mixArr = ['vũ anh tuấn', 'react', true, 22, { goodBoy: true }]
console.log(mixArr);

console.log(arrNumber);
console.log(arrString);

// thử ví dụ với phương thức của mảng
// arrNumber.push('tuan');  // ở đây nếu push 1 chuỗi vào trong 1 mảng số thì TS sẽ cảnh báo
const arrPush = arrNumber.push(4)
console.log(arrNumber); // --> [1, 2, 3, 4], push thêm phần tử vào cuối mảng
console.log(arrPush);  // --> 4  // phương thức push sẽ trả về chiều dài của mảng

const arrShift = arrString.shift()
console.log(arrString);  // -->  ['android', 'es6'] , shift xóa phần tử đầu tiên ra khỏi mảng
console.log(arrShift); // --> // phương thức shift sẽ trả về phần tử bị xóa
