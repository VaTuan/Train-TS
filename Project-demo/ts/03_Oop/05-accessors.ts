class nCourse {
    private _name: string;
    constructor(name: string) {
        this._name = name
    }
    showCourseInfo(): void {
        console.log(`${this.name}`);
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
}
let nCourseObj = new nCourse('TypeScript')
// console.log(nCourseObj._name); // không thể truy cập vì _name có phạm vi là private
console.log('Name: ', nCourseObj.name);

nCourseObj.name = 'Learn TS';
console.log('Name after set: ', nCourseObj.name);


/*
   Hiểu cơ bản là nếu thuốc tính name để là private, thì phải sử dụng accessors
   - Đặt dấu '_' trước tên biến vd : _name
*/