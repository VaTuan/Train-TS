//==> ANY

let mVariable: any = 20
mVariable = 'Example any variable'
mVariable = true
mVariable = [1, 2, 3, 4]
mVariable = null
mVariable = { name: 'Tran Cung', age: 20 }

console.log(mVariable);

let mArray: any[]
mArray = ['tuan98', true, 1, { goodBoy: true }]
console.log(mArray);


// => Khi khai báo 1 biến với kiểu dữ liệu là any thì ta có thể tùy ý khai báo thế nào cũng được