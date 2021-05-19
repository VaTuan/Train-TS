class Course {
    id: string;
    name: string;
    price: number;

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
class CourseMobile extends Course {
    author: string;
    constructor(id: string, name: string, price: number, author: string) {
        super(id, name, price);
        this.author = author
    }
    showCourseInfo() {
        super.showCourseInfo();
        console.log(this.author);
    }
}
let courseMoblieObj = new CourseMobile('11', 'Android', 200000, 'Vatuan')
console.log(courseMoblieObj);
console.log(courseMoblieObj.showCourseInfo());