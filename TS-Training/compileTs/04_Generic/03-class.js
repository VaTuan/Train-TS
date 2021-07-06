// Generic đối với class
// Ví dụ muốn tạo 1 class định nghĩa 1 sản phẩm nào đó 
// ID NAME PRICE --> các giá trị linh hoạt kiểu dữ liệu
// dưới đây là cách tạo 1 class với generic
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("ID1", "Product 01", 20); // có thể không cần để dấu <>
let product2 = new Product(2323, "Product 01", "100 USD"); // để thì phải đúng kiểu DL
product1.showProductInfo();
/**
 * * Tham số đặt trong <> sau tên class
 */
// example 02:
class Dictionary {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`key = ${this.key} and value = ${this.value}`);
    }
}
let dic = new Dictionary("tuan", 20);
dic.display();
//example 03: 
class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`Key = ${this.key} value = ${this.value}`);
    }
}
;
class kvProcessor {
    process(key, val) {
        console.log(`Key = ${key} and value = ${val}`);
    }
}
let kvProcess = new kvProcessor();
kvProcess.process('age', 20);
