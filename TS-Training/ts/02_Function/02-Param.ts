
// PARAM (THAM SỐ ĐẦU VÀO) CỦA HÀM
// ==>Đầy đủ các tham số 
function userInfor1(name: string, age: number): string {
    return `My name is ${name}, ${age} years old`
}
console.log(userInfor1('Tuan', 22));

//==>  Giá trị mặc định cho tham số 
function userInfor2(name: string = 'Vũ Anh Tuấn', age: number = 22): string {
    return `My name is ${name}, ${age} years old`
}
console.log(userInfor2());  // --> My name is Vũ Anh Tuấn, 22 years old

// ==>  Tham số khuyết
// muốn sử dụng tham số khuyết ta dùng thêm dấu ' ? '
// tham số khuyết có nghĩa là tham số truyền vào của hàm là không bắt buộc ,
// và khi 1 param là tham số khuyết thì không được thêm giá trị khởi tạo
function userInfor3(name: string = 'Anh Tuấn', age?: number): string {
    if (age == null) {
        return `My name is ${name}`;
    }
    else {
        return `My name is ${name}, ${age} years old`
    }
}
console.log(userInfor3());

// ==> Kiểu dữ liệu đầu vào nhiều hơn 1 kiểu
// ta dùng ' | '
function totalLength(x: (string | any[]), y: (string | number)[]) {
    return x.length + y.length;
}
console.log(totalLength([1, 2, 3], ['a', 'b', 'c'])); // --> 6


//==>  REST PARAM
// Có nghĩa là bạn có thể khai báo 1 hàm với SỐ LƯỢNG tham số không xác định
// cùng theo dõi ví dụ sau 

// để sử dụng rest param thì ta sử dụng dấu '...'
// nhưng một hàm thì nên xác định được số lượng param truyền vào
// theo mình thì REST PARAM nên hạn chế dùng
function showStudentInfor(name: string, ...courses: string[]): string {
    return `${name} learn ${courses.join(', ')}`
}
console.log(showStudentInfor('John', 'java', 'react'));


