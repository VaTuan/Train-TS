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
