// ==> Object
// khai báo object theo kiểu bình thường, không ràng buộc dữ liệu từng trường
// khai báo 1 object :
let objDeclare: any = {}
objDeclare.ten = 'tuan';
objDeclare.tuoi = 22;
console.log('objDeclare', objDeclare);
// Hoặc
let informationUser: object
informationUser = { name: 'Trần Văn A', age: 56 }
informationUser = { name: 'Trần Văn A', age: 56, goodBoy: false }
console.log(informationUser); // => { name: 'Trần Văn A', age: 56, goodBoy: false }

// khai báo theo kiểu chặt chẽ, ràng buộc chặt chẽ kiểu dữ liệu 
let myInformation: { name: string, age: number, isGoodBoy: boolean }
// myInformation = {name : 12, age : 22, isGoodBoy : 'trai tốt'}  // => báo lỗi vì name và isGoodBoy đang để không đúng kiểu Dl
myInformation = { name: "Vũ Anh Tuấn", age: 22, isGoodBoy: true }
console.log(myInformation);




