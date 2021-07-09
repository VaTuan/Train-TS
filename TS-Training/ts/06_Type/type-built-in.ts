/**
 * ? MỘT SỐ LOẠI TYPE BUILT IN PHỔ BIẾN HAY DÙNG :
 * * Exclude
 * * Extract
 * * Readonly
 * * Partial
 * * NonNullable
 * * Pick
 * * Omit
 * * Record
 * * ReturnType
 */

/** ================================================***========================================================= */
/**
 * ! Exclude
 *  Áp dụng cho union type ( | )
 * TODO : loại bỏ những types ở T nếu type này gán được cho U ( nói cách khác là check ở U xem có thằng nào giống ở T thì bỏ ở T đi, BỎ ĐI CÁI CHUNG)
 */
type A = Exclude<string | number | boolean, number>;
// ---> type A = string | boolean
let resA: A = "tring";
let resA_v1: A = true;
// let resA_v2: A = 29; -> vì type của A là string | boolean không phải number
/** ========================================================================================================= */

/** ===============================================***========================================================== */
/**
 * ! Extract
 * Áp dụng cho union type ( | )
 * TODO : loại bỏ những type ở T nếu type này KHÔNG gán được cho U (nói cách khác là GIỮ LẠI CÁI CHUNG của 2 type)
 */
type B = Extract<string | number | boolean, number>;
// ---> type B = number
let resB: B = 2908;
// let resB_v1: B = 'vũ anh tuấn'; -> vì type của B là number không phải string nên sẽ báo lỗi
// let resB_v2: B = true; -> type 'number' can not assignable to type 'boolean'
/** ========================================================================================================= */

/** ===============================================***========================================================== */
/**
 * ! Readonly
 * TODO : làm tất cả các props trong type thành readonly
 */
enum PROGRESS {
  created,
  process,
  finish,
}

interface Todo {
  title: string;
  progress: PROGRESS;
}

const demo: Readonly<Partial<Todo>> = {
  title: "Delete inactive users",
  progress: PROGRESS.finish,
};

console.log({ demo });
const conCat: string = demo.title + "vũ anh tuấn";

console.log({ conCat });

// demo.title = "Hello"; // cannot assign to 'title' because it is a read-only property, không được gán lại bằng giá trị khác
/** ========================================================================================================= */

/** ================================================***========================================================= */
/**
 * ! Partial
 * TODO : làm cho tất cả props trong type thành optional
 */

interface Person {
  name: string;
  age: number;
  isThin: boolean; // nếu không có ? (optional property)
}

function updataPerson(person: Person, fieldsToUpdate: Partial<Person>) {
  // sử dụng partial để làm cho tất cả props trong interface Person đều thành optional
  // có thể sửa hoặc không
  return { ...person, ...fieldsToUpdate };
}

const person1 = {
  name: "tuấn 98",
  age: 18,
  isThin: false,
};

const personAfterUpdate = updataPerson(person1, {
  isThin: true, // update lại person nếu không có Partial để làm cho tất cả các props thành optional
});
/** ========================================================================================================= */

/** =================================================***======================================================== */
/**
 * ! NonNullable
 *TODO : loại bỏ null và undefined khỏi Type
 * dùng trong Union type (|)
 */
type T0 = NonNullable<string | number | undefined>;
// ---> type T0 = string | number
type T1<T> = NonNullable<T[] | string | number | null>;

/** =================================================***======================================================== */
/**
 * ! Pick và Omit
 * TODO: Pick - lấy từ trong T những type có key là K
 * TODO: Omit - loại bỏ type có key là K trong T
 */
// Pick with interface
interface IBox {
  width: number;
  height: number;
  isBoxShadow: boolean;
}

type HasBoxShadow = Pick<IBox, "isBoxShadow">; // ---> chỉ lấy props isBoxShadow trong IBox
let boxRes: HasBoxShadow = { isBoxShadow: false };
// let boxResError: HasBoxShadow = { isBoxShadow: false, width: 199 }; // ---> thừa width

type HasWidthHeight = Omit<IBox, "isBoxShadow">; // ---> loại bỏ props isBoxShadow trong IBox
let hasWidthHeight: HasWidthHeight = { width: 200, height: 100 };
// let hasWidthHeightError: HasWidthHeight = {
//   width: 200,
//   height: 100,                            // ---> chỉ nhận những props : width và height trong vd này thừa isBoxShadow
//   isBoxShadow: false,
// };
/** ========================================================================================================= */

/** ===============================================***========================================================== */
/**
 * !Record
 * TODO: Gán type T cho lần lượt từng key P trong K
 * tham số đầu tiên truyền vào thì phải là union type ( | )
 * tham số thứ 2 có thể là union type hoặc là kiểu object
 */

// example 01
interface CatInfo {
  name: string;
  weight: number;
}
type CatName = "foo" | "bar";

const cats: Record<number | string, CatInfo> = {
  foo: { name: "asdjnfajsd", weight: 23 },
  bar: { name: "dadfasd", weight: 23 },
};
console.log(cats.bar); // con mèo có tên là bar   , có thể lấy bằng cách khác (dòng dưới)
console.log(cats["bar"]);

console.log(cats.foo); // con mèo có tên là foo

// example 02
interface ButtonProps {
  variant: "primary" | "outline" | "secondary" | "error";
  isLoading: boolean;
  size: "normal" | "small";
}

const classByVariant: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-gray-200",
  outline: "aaaaaaaaaaaaa",
  secondary: "áddd",
  error: "ádasdasd",
};

const classBySize: Record<NonNullable<ButtonProps["size"]>, string | number> = {
  normal: "aaaaaaaa",
  small: 3234234,
  // normal : false, ---> không được gán với type là boolean
};
/** ========================================================================================================= */

/** =================================================**======================================================== */
/**
 * ! ReturnType
 * TODO :  trả về type của giá trị mà function T trả về.
 */
type Result = ReturnType<() => string>; // string
type Res = ReturnType<<T extends U, U extends number[]>() => T>; // ---> type Res = number[]
/** ========================================================================================================= */
