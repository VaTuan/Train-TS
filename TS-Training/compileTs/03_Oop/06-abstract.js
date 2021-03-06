class Laptop {
    keyboard() {
        console.log('Laptop.keyboard');
    }
    chipset() {
        console.log('Laptop.chipset');
    }
}
// let laptopObj = new Laptop();  // không thể tạo thể hiện của 1 abstract class
// mà phải tạo như thế này 
class LaptopDell extends Laptop {
    // ghi đè phương thức keyboard() của class cha
    keyboard() {
        console.log('LaptopDell.keyboard - overide');
    }
    // khi mainboard là abstract method thì phải đươc implemention ở lớp con
    // khi lớp cha định nghĩa giá trị trả về của phương thức như thế nào thì lớp con phải trả về y như vậy
    // public mainboard(): void {   // --> ở lớp cha trả về là string ,nên SAI 
    //     console.log('LaptopDell.mainboard - overide');
    // }
    // **Không nhận nhất thiết phải nhận tham số truyền vào
    // ** mặc dù tại lớp cha phương thức mainboard() có tham số truyền vào
    mainboard() {
        return 'LaptopDell.mainboard';
    }
}
// let laptopObj: Laptop = new LaptopDell()
// 2 cách đều được, ý nghĩa như nhau
let laptopObj = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
console.log(laptopObj.mainboard());
/*
 Note :
  - Không thể tạo thể hiện với 1 abstract class
   mà phải tạo ra 1 class khác extend lại abstract class
  - Khi một method được định nghĩa là 1 abstract thì nó không được triển khai
  mà nó phải triển khai ở lớp con
  - Method của lớp abstract có tham số truyền vào, nhưng khi nó được triển ở lớp
  con kế thừa thì không nhất thiết phải nhận vào tham số truyền vào
*/ 
