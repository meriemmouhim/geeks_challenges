export class TODOlist{
    constructor(){
        this.tasks = []
    }
    addTask(task){
        this.tasks.push({task, complete: false});
        console.log(`task added: ${task}`);
    };
    markTaskCompete(index){
        if (index >= 0 && index < this.tasks.length){
            this.tasks[index].complete = true;
            console.log(`task is marked as completed: ${this.tasks[index].task}`);
        }else{
            console.log("invalid task index");
        }
    };
    listAllTasks(){
        console.log('Tasks Listed:')
        if( this.tasks.length === 0){
            console.log('no Tasks in this todolist')
        }else{
            this.tasks.forEach((task, index) => {
                const status = task.complete ? "✓" : " ";
                console.log(`${inddex + 1}: [${status} ${task}]`)
            })
        }
    }
}