//Cách tạo class trong TS
/*
class Task {
    mId: number;
    mName: string;
    mState: string;

    constructor(id: number, name: string, state: string) {
        this.mId = id
        this.mName = name
        this.mState = state
    }
    showTaskInfo() {
        console.log(`${this.mId} - ${this.mName} - ${this.mState}`);
    }
}

let taskObj1 = new Task(1, 'Coding', 'created');
console.log(taskObj1);
console.log(taskObj1.showTaskInfo());
*/
//===============================================================
/*

// VÍ DỤ Kết hợp với Interface và Enum
// làm cho class của bạn trở nên linh hoạt hơn

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
class TaskService {
    tasks: Array<TaskInterface>
    constructor(tasks: Array<TaskInterface>) {
        this.tasks = tasks
    }
    getItems() {
        return this.tasks
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

*/ 
