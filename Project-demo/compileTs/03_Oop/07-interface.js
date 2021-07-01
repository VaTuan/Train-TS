class Superman {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('sleep');
    }
}
// Cả 2 cách dưới đều được
// let tuan: Superman = new Superman();
let tuan = new Superman('tuan');
tuan.eat();
tuan.sleep();
class IronMan {
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('sleep');
    }
    fly() {
        console.log('i can fly');
    }
}
let tony = new IronMan();
tony.fly();
//===========================================
// ví dụ dùng kết hợp cả extends và implements
// tạo thêm 1 class để kế thừa
class Machine {
    caculator(x, y) {
        return x + y;
    }
}
class MyLove extends Machine {
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('sleep');
    }
    fly() {
        console.log('i can fly');
    }
}
let myLove = new MyLove();
console.log(myLove.caculator(3, 4));
/*
- Một interface chỉ được định nghĩa chứ không được triển khai
 - Nếu một class implements interface thì phải overide lại method của interface
*/ 
