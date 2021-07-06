// ==> ENUM
// cách khai báo kiểu enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 0] = "created";
    STATUS[STATUS["process"] = 1] = "process";
    STATUS[STATUS["finish"] = 2] = "finish";
})(STATUS || (STATUS = {}));
if (STATUS.created == 0) {
    console.log('khoi tao');
}
let todoStatus = STATUS.created;
console.log(todoStatus); // --> 0, mặc định thì nó sẽ trả ra vị trí
// khai báo, sau đó đặt giá trị khởi tạo
var LIFECYCLE;
(function (LIFECYCLE) {
    LIFECYCLE[LIFECYCLE["willmount"] = 100] = "willmount";
    LIFECYCLE[LIFECYCLE["mount"] = 104] = "mount";
    LIFECYCLE[LIFECYCLE["unmount"] = 105] = "unmount";
})(LIFECYCLE || (LIFECYCLE = {}));
let itemLifeCycle = LIFECYCLE.willmount; // cũng có thể viết thế này mà không cần " let itemLifeCycle :LIFECYCLE =  LIFECYCLE.willmount"
console.log(itemLifeCycle); // --> 100
// console.log(LIFECYCLE.mount)  // --> 101, nếu không để giá trị mặc định là 104 thì nó sẽ là 101
console.log(LIFECYCLE.mount); // --> 104
