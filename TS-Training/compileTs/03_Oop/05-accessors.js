class nCourse {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(`${this.name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let nCourseObj = new nCourse('TypeScript');
// console.log(nCourseObj._name); // không thể truy cập vì _name có phạm vi là private
console.log('Name: ', nCourseObj.name);
nCourseObj.name = 'Learn TS';
console.log('Name after set: ', nCourseObj.name);
/*
   Hiểu cơ bản là nếu thuốc tính name để là private, thì phải sử dụng accessors
   - Đặt dấu '_' trước tên biến vd : _name
*/ 
