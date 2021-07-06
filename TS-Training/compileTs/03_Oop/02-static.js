//===============================================================
// STATIC VÀ CÁCH SỬ DỤNG
// VÍ DỤ Kết hợp với Interface và Enum
// làm cho class của bạn trở nên linh hoạt hơn
/*
   - Với từ khóa static thì ta có thể truy cập được vào thuộc tính và phương thức của class
   - mà không cần khởi tạo đối tượng của class đó
*/
// tạo enum
var TASK_STATE;
(function (TASK_STATE) {
    TASK_STATE[TASK_STATE["Created"] = 0] = "Created";
    TASK_STATE[TASK_STATE["Active"] = 1] = "Active";
    TASK_STATE[TASK_STATE["InActive"] = 2] = "InActive";
    TASK_STATE[TASK_STATE["Process"] = 3] = "Process";
    TASK_STATE[TASK_STATE["Finish"] = 4] = "Finish";
})(TASK_STATE || (TASK_STATE = {}));
// class TaskService 
// created by vatuan 13/10/2020
class TaskService {
    constructor(tasks) {
        TaskService.tasks = tasks;
    }
    getItems() {
        return TaskService.tasks;
    }
    static showItemsInfor() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.userName} - ${task.name}`);
        }
    }
}
TaskService.userName = 'Tuấn';
let tasks = [{
        id: 1,
        name: 'Learn React',
        state: TASK_STATE.Active
    },
    {
        id: 2,
        name: 'Learn Tieng Viet',
        state: TASK_STATE.Finish
    }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj);
console.log(taskServiceObj.getItems());
// lấy ra userName được tạo với từ khóa static
// với từ khóa static thì ta có thể truy cập trực tiếp vào thuộc tính mà không cần tạo ra 1 đối tượng
// Cách gọi ra thuộc tính và phương thức có từ khóa static
console.log('userName: ', TaskService.userName);
TaskService.showItemsInfor();
