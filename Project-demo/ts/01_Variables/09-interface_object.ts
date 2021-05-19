let objOne: any = {}
console.log('objOne: ', objOne);

// Example 01: 
// Tạo ra 1 interface object
// ở đây interface object có tên là UserLogin
interface UserLogin {
    userName: string,
    email: string,
    isLogin: boolean
    age?: number   // có nghĩa là trường này không bắt buộc 
    logOut: Function

}
// tạo 1 đối tượng là user01
let user01: UserLogin;  // --> ở đây ta nói user01 thuộc về kiểu UserLogin
console.log('user 01:', user01);  // --> undefined, vì chưa gán giá trị cho nó

// tạo 1 đối tượng là user02
let user02: UserLogin;
user02 = {
    userName: 'vatuan',
    email: 'vuanhtuan743@gmail.com',
    isLogin: true,
    // age: 22,
    logOut: function () {    // trong đó cũng có thể có object method
        console.log(`${this.userName} logout day`);
    },
}
console.log('user 02 : ', user02);
console.log('user name: ', user02.userName);
user02.logOut();

// Note : 

/*
  - Trong object-interface định nghĩa kiểu dữ liệu như thế nào thì khi 1 thể hiện của nó cũng phải đặt các trường có kiểu dữ liệu như định nghĩa
  - vd : userName : string thì phải đặt đúng kiểu string
  - Nếu trong object-interface định nghĩa có 5 trường thì phải triển khai đủ 5 trường,
  - Trường hợp nếu muốn trường đó không bắt buộc phải có thì thêm dấu ' ? ' , vd : age?: number,
*/

// Example 02: 
interface IRestaurant {
    restaurant_id: number;
    restaurant_rank: number;
    restaurant_details?: any;
}
interface IThing {
    user_id: number
    timestamp: string
    retaurants: Array<IRestaurant>
}

const test: IThing = {
    user_id: 5,
    timestamp: "5 hour",
    retaurants: [
        {
            restaurant_id: 1,
            restaurant_rank: 1,
            restaurant_details: 'khong'
        },
        {
            restaurant_id: 2,
            restaurant_rank: 2
        },
    ]

}

console.log(test);

//Example 03 : mèo ăn chuột
interface Mouse {
    name: string
}
interface Cat {
    name: string
    weight: number
    stomatch: Array<any>
    eat: Function
}
let tom: Cat = {
    name: "tom",
    weight: 12,
    stomatch: [],
    eat: function (mouses: Array<Mouse>) {
        return this.stomatch.push(mouses.map(item => item.name))
    }
}
console.log(tom);
let mouse1: Mouse = {
    name: 'jerry'
}
let mouse2: Mouse = {
    name: 'jerry01'
}
tom.eat([mouse1, mouse2])
console.log(tom.stomatch[0][0]);

