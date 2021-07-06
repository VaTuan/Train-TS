
// let course: Array<string>
// course = ['anh', 'tuan']
// console.log(course);

interface CourseList {
    [index: number]: string   // 1 phần tử thì sẽ có 1 chỉ số và giá trị của phần tử đó
}
let course: CourseList = ['anh', 'tuan']
// let course: CourseList = ['anh', 1]  // --> vì để nó là string nên viết thế này sẽ có lỗi
console.log(course);


interface CourseListDemo {
    [index: number]: any,
}
let couseDemo: CourseListDemo = ['vu anh tuấn', 1, true]
console.log(couseDemo);  // sẽ không có lỗi vì để là 'any'
