interface People {
    name: string;
    eat(): void;
    sleep(): void;
}

class Superman implements People {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void {
        console.log('eat');
    }
    sleep(): void {
        console.log('sleep');
    }
}
// Cả 2 cách dưới đều được
// let tuan: Superman = new Superman();
let tuan: People = new Superman('tuan');
tuan.eat();
tuan.sleep();

//==========================================
// ví dụ  implement nhiều interface
// thì chỉ cần thêm interface đằng sau dấu phẩy
interface Bird {
    fly(): void;
}
class IronMan implements People, Bird {  // implement nhiều interface
    name: string;
    eat(): void {
        console.log('eat');
    }
    sleep(): void {
        console.log('sleep');
    }
    fly(): void {
        console.log('i can fly');
    }
}
let tony: IronMan = new IronMan();
tony.fly();

//===========================================
// ví dụ dùng kết hợp cả extends và implements

// tạo thêm 1 class để kế thừa
class Machine {
    caculator(x: number, y: number): number {
        return x + y
    }
}
class MyLove extends Machine implements People, Bird {
    name: string;
    eat(): void {
        console.log('eat');
    }
    sleep(): void {
        console.log('sleep');
    }
    fly(): void {
        console.log('i can fly');
    }
}
let myLove = new MyLove();
console.log(myLove.caculator(3, 4));

/*
- Một interface chỉ được định nghĩa chứ không được triển khai
 - Nếu một class implements interface thì phải overide lại method của interface
*/