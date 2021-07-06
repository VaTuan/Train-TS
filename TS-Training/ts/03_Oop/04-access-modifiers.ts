/*                Inside(trong class)  |  Outside(ngoài class) |  Child Class(class con)
    public                 +                        +                       +
    private                +                        -                       -
    protected              +                        -                       +
*/

class mCourse {
    public id: string;
    private name: string;
    protected price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCourseInfo(): void {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
// Để thể hiện sự kế thừa ta sử dụng từ khóa 'extends'
class mCourseMobile extends mCourse {
    author: string;
    constructor(id: string, name: string, price: number, author: string) {
        super(id, name, price);
        this.author = author
    }
    checkPro() {
        console.log(this.price);
        console.log(this.id);
        console.log(this.author);
        // console.log(this.name); name có phạm vi là private không được truy cập tại class con
    }
}
let courseObj = new mCourse('C123', 'Learn React', 100000);
let courseMobileObj = new mCourseMobile("CMB123", 'Learn Android', 20000, 'Vu Anh Tuan')
// ví dụ với thuộc tính có phạm vi là public
console.log(courseObj.id); // --> C123 

console.log(courseMobileObj.checkPro());   // -->20000 ,