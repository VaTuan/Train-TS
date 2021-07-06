abstract class Laptop {
    public keyboard(): void {
        console.log('Laptop.keyboard');
    }
    // vì method mainboard() là 1 abstract method nên không được triển khai
    // chỉ được khai báo như bên dưới
    // public abstract mainboard(): void {
    //     console.log('Laptop.mainboard');
    // }
    public abstract mainboard(nam: string): string;
    public chipset(): void {
        console.log('Laptop.chipset');
    }
}

// let laptopObj = new Laptop();  // không thể tạo thể hiện của 1 abstract class
// mà phải tạo như thế này
//* Tạo bằng cách: tạo 1 lớp mới kế thừa với lớp abstract và ghi đè phương thức của lớp cha
class LaptopDell extends Laptop {
    // ghi đè phương thức keyboard() của class cha
    keyboard(): void {
        console.log('LaptopDell.keyboard - overide');
    }

    // khi mainboard là abstract method thì phải đươc implemention ở lớp con
    // khi lớp cha định nghĩa giá trị trả về của phương thức như thế nào thì lớp con phải trả về y như vậy
    // public mainboard(): void {   // --> ở lớp cha trả về là string ,nên SAI 
    //     console.log('LaptopDell.mainboard - overide');
    // }

    // **Không nhận nhất thiết phải nhận tham số truyền vào
    // ** mặc dù tại lớp cha phương thức mainboard() có tham số truyền vào
    public mainboard(): string {
        return 'LaptopDell.mainboard'
    }
}
// let laptopObj: Laptop = new LaptopDell()
// 2 cách đều được, ý nghĩa như nhau
let laptopObj: LaptopDell = new LaptopDell()

laptopObj.keyboard()
laptopObj.mainboard()
laptopObj.chipset()
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