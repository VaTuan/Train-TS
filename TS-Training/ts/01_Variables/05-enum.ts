
// ==> ENUM
// cách khai báo kiểu enum
enum STATUS { created, process, finish }

if (STATUS.created == 0) {
    console.log('khoi tao');
}
let todoStatus: STATUS = STATUS.created
console.log(todoStatus); // --> 0, mặc định thì nó sẽ trả ra vị trí

// khai báo, sau đó đặt giá trị khởi tạo
enum LIFECYCLE { willmount = 100, mount = 104, unmount }
let itemLifeCycle = LIFECYCLE.willmount  // cũng có thể viết thế này mà không cần " let itemLifeCycle :LIFECYCLE =  LIFECYCLE.willmount"
console.log(itemLifeCycle);  // --> 100
// console.log(LIFECYCLE.mount)  // --> 101, nếu không để giá trị mặc định là 104 thì nó sẽ là 101
console.log(LIFECYCLE.mount);  // --> 104

