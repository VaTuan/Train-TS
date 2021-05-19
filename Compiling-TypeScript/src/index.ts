// Type Basic
let userName = "tuan";
console.log(userName);

userName = "anh";
console.log(userName);
const crile = (r: number) => {
  return r * Math.PI;
};
console.log(crile(10));

// ================== Arrays ==========================
let names = ["vu", "anh", "tuan"];
//console.log(names);
//names.push(20); // => nếu push 1 số vào 1 mảng string thì TS sẽ cảnh báo
console.log(names);

names.push("dep trai"); // => nếu push 1 tring vào 1 mảng string thì không báo
console.log(names);

// Ví dụ 1 mảng gồm cả string và number và boolean
let mixed = ["tuan", "vu", 29, true];
mixed.push("tuan"); //=> push string vào mảng ok
mixed.push(983); // => ok
mixed.push(false); // => ok
console.log(mixed);

// ========================== Object ================================
let person = {
  name: "tuan",
  age: 20,
};

person.name = "anh";
person.age = 32;
//person.age = "32";   ---- // > khi khai báo age là number, mà thay đổi giá trị của nó thành string, TS báo lỗi
person.skill = ["đánh", "đấm"]; // thêm trường skill vào mảng, vẫn ok, nhưng TS sẽ cảnh báo là không nên thêm vì chưa được định nghĩa
console.log(person);

// ======================= Explicit types (KHAI BÁO CHẶT CHẼ)=======================
let eat: string;
let weight: number;
let isLoggedIn: boolean;

eat = "meat";

// isLoggedIn = 'yes'
isLoggedIn = true;
console.log(eat);
console.log(isLoggedIn);

// =======explicit arrays

let productNames: string[] = []; // khai báo 1 mảng theo cấu trúc chặt ché
productNames.push("Iphone5");
// productNames.push(1000); // nếu push 1 number vào 1 mảng thì TS sẽ cảnh báo
productNames.push("Iphone 6");
console.log(productNames);

let mixedArr: (string | number | boolean)[] = []; // khai báo 1 mảng có các kiểu DL khác nhau
mixedArr.push("tuan");
mixedArr.push(20);
mixedArr.push(true);
console.log(mixedArr);

// nomal explicit
let uuid: number | string; // khai báo 1 biến có thẻ có 2 kiểu là number và string
// uuid = true  // => nếu gán cho kiểu boolean thì sẽ cảnh báo lỗi
uuid = 2908;
uuid = "vuanhtuan2908";

// ===== object explicit
let ninjaPro: object; // khai báo 1 biến có kiểu dl là obj
ninjaPro = { name: "ninja01", age: 98 };
// ninjaPro = 'object ninjs' //=> TS sẽ cảnh báo là phải có kiểu Object

let ninjsNoPro: { name: string; age: number; isHandsome: boolean };
// ninjsNoPro = { name: "Pheo", age: "29", isHandsome: true }; => TS warning vì tuổi để không đúng kiêu
ninjsNoPro = { name: "Anlex", age: 30, isHandsome: false }; // good

// ========================== Dynamic(any) types (TẠO RA 1 BIẾN CÓ KIỂU DL BẤT KỲ)====
let ageOfAuthor: any; // dùng từ khóa any
ageOfAuthor = 24;
ageOfAuthor = "24";
ageOfAuthor = true;
ageOfAuthor = { name: "Vũ Anh Tuấn" };

// Có thể là bất kì kiểu nào
console.log(ageOfAuthor, "ageOfAuthor");

let mixedArrDynamic: any[] = [];
mixedArrDynamic.push(true);
mixedArrDynamic.push("tuan dz");
mixedArrDynamic.push(23);
console.log(mixedArrDynamic, "mixedArrDynamic");

let ninjaDynamic: { name: any; age: any };
ninjaDynamic = { name: "Yoshi", age: 30 };
ninjaDynamic = { name: "Andrui", age: true };
console.log(ninjaDynamic, "ninjaDynamic");

// Exampple Prototypes
function Mouse(name: string, weight: number) {
  this.name = name;
  this.weight = weight;
  this.address = "Ha noi 1";
  this.sayHello = function () {
    console.log("hello TS, my name is:", name);
  };
}
const Jerry = new Mouse("Jerry", 30);
Jerry.sayHello();

console.log(Jerry);

console.log("abc run");
