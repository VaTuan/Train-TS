let objOne = {};
console.log('objOne: ', objOne);
// tạo 1 đối tượng là user01
let user01; // --> ở đây ta nói user01 thuộc về kiểu UserLogin
console.log('user 01:', user01); // --> undefined, vì chưa gán giá trị cho nó
// tạo 1 đối tượng là user02
let user02;
user02 = {
    userName: 'vatuan',
    email: 'vuanhtuan743@gmail.com',
    isLogin: true,
    // age: 22,
    logOut: function () {
        console.log(`${this.userName} logout day`);
    },
};
console.log('user 02 : ', user02);
console.log('user name: ', user02.userName);
user02.logOut();
const test = {
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
};
console.log(test);
let tom = {
    name: "tom",
    weight: 12,
    stomatch: [],
    eat: function (mouses) {
        return this.stomatch.push(mouses.map(item => item.name));
    }
};
console.log(tom);
let mouse1 = {
    name: 'jerry'
};
let mouse2 = {
    name: 'jerry01'
};
tom.eat([mouse1, mouse2]);
console.log(tom.stomatch[0][0]);
