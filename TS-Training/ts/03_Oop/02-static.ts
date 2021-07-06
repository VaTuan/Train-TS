
//===============================================================
// STATIC VÀ CÁCH SỬ DỤNG
// VÍ DỤ Kết hợp với Interface và Enum
// làm cho class của bạn trở nên linh hoạt hơn

/*
   - Với từ khóa static thì ta có thể truy cập được vào thuộc tính và phương thức của class
   - mà không cần khởi tạo đối tượng của class đó
*/
// tạo enum
enum TASK_STATE {
    Created = 0,
    Active = 1,
    InActive = 2,
    Process = 3,
    Finish = 4,
}
// tạo interface
interface TaskInterface {
    id: number;
    name: string;
    state?: TASK_STATE
}

// class TaskService 
// created by vatuan 13/10/2020
class TaskService {
    static userName: string = 'Tuấn';
    static tasks: Array<TaskInterface>
    constructor(tasks: Array<TaskInterface>) {
        TaskService.tasks = tasks
    }
    getItems(): TaskInterface[] {
        return TaskService.tasks
    }
    static showItemsInfor(): void {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.userName} - ${task.name}`);
        }
    }
}
let tasks: TaskInterface[] = [{
    id: 1,
    name: 'Learn React',
    state: TASK_STATE.Active
},
{
    id: 2,
    name: 'Learn Tieng Viet',
    state: TASK_STATE.Finish
}
]

let taskServiceObj = new TaskService(tasks)
console.log(taskServiceObj);
console.log(taskServiceObj.getItems());

// lấy ra userName được tạo với từ khóa static
// với từ khóa static thì ta có thể truy cập trực tiếp vào thuộc tính mà không cần tạo ra 1 đối tượng
// Cách gọi ra thuộc tính và phương thức có từ khóa static
console.log('userName: ', TaskService.userName);
TaskService.showItemsInfor();