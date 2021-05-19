//  ==============CÁC KIÊU DỮ LIỆU CƠ BẢN================== 
//==> BOOLEAN
var free = true;
// var free = 'tuan'    // => vẫn có thể khai báo thế này, nhưng TS sẽ hiện cảnh báo
console.log(free);
//==> NUMBER
const score = 10;
console.log(score);
//==> STRING
let fullName = 'Vũ Anh Tuấn';
fullName = 'Anh Tuấn';
// sử dụng template string
fullName = `${free} - ${fullName}`; // => true - Anh Tuấn
console.log(fullName);
