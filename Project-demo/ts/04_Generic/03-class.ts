// Generic đối với class

// Ví dụ muốn tạo 1 class định nghĩa 1 sản phẩm nào đó 

// ID NAME PRICE --> các giá trị linh hoạt kiểu dữ liệu

// dưới đây là cách tạo 1 class với generic
class Product<A, B, C>{
    id: A;
    name: B;
    price: C;
    constructor(id: A, name: B, price: C) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`)
    }
}
let product1 = new Product("ID1", "Product 01", 20)   // có thể không cần để dấu <>
let product2 = new Product<number, string, string>(2323, "Product 01", "100 USD")  // để thì phải đúng kiểu DL
product1.showProductInfo();

/**
 * * Tham số đặt trong <> sau tên class
 */
// example 02:
class Dictionary<T, U>{
    constructor(public key: T, public value: U) {

    }
    display(): void {
        console.log(`key = ${this.key} and value = ${this.value}`);
    }
}
let dic: Dictionary<string, number> = new Dictionary("tuan", 20);
dic.display();

//example 03: 
class KeyValuePair<T, U>{
    private key : T;
    private value : U

    setKeyValue(key : T, value : U){
        this.key = key
        this.value = value
    } 
    display():void{
        console.log(`Key = ${this.key} value = ${this.value}`);
        
    }
}


/**
 ** Generic class inplement generic interface
 */

interface IKeyValueProcessor<T, U>{
    process(key: T, val : U): void
};
class kvProcessor<A, B> implements IKeyValueProcessor<A, B>{
 process(key : A, val : B): void{
   console.log(`Key = ${key} and value = ${val}`);
 } 
}

let kvProcess = new kvProcessor<string, number>()
kvProcess.process('age', 20)