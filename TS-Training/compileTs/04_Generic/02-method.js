// Dưới đây là cách viết generic method
class StudyGeneric {
    static printArray(params) {
        console.log(params);
    }
}
// class StudyGeneric {
//     printArray<T>(params: T[]): void {
//         console.log(params)
//     }
// }
// Có thể hiểu như nếu dùng generic thì sẽ tạo ra 1 kiểu dùng chung cho method, linh hoạt kiểu dữ liệu truyền vào
// Như ví dụ trên nếu muốn ràng buộc chặt chẽ kiểu dữ liệu mà không sử dụng đến generic thì phải tạo ra mỗi chức năng 1 method riêng
StudyGeneric.printArray([1, 2, 3]); // nếu để là <number> thì phải trong tham số truyền vào khi gọi hàm thì phải là mảng array
StudyGeneric.printArray(['tuan', 'dep trai']); // tương tự như vậy cũng phải để là string
StudyGeneric.printArray([1, 'tuan', true]);
