//CÁCH ĐỂ OVERLOAD LẠI FUNC ĐÃ ĐƯỢC ĐỊNH NGHĨA TRƯỚC

// Nếu khai báo 2 hàm có cùng tên thì sẽ báo lỗi
// function funcAbc(x: number): string {
//     return '123'
// }
// function funcAbc(x: string, y: number): number {
//     return 1000;
// }

function funcAbc(x: number): string
function funcAbc(x: string): number
function funcAbc(x: boolean): boolean
function funcAbc(x: any): any {
    if (typeof x === 'number') {
        return 'OverLoad hihi!'
    }
    else if (typeof x === 'string') {
        return 1000
    }
    else {
        return true
    }
}
console.log(funcAbc(false));