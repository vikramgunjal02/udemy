import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
@Input({required:true}) userId?:string;
@Input({required:true}) name?:string;
addTaskFlag:boolean=false;
tasks =[{
  id:'t1',
  userId:'u1',
  title:'Angular Learning',
  summary:'Just for learning things here',
  dueDate:'2025-12-31  '
},
{
  id:'t2',
  userId:'u2',
  title:'REact Learning',
  summary:'Just for learning things here',
  dueDate:'2025-12-31  '
}]

get selectedUserTasks(){
  return this.tasks.filter(task=>task.userId===this.userId)
}

onCompleteTask(id:string){
this.tasks = this.tasks.filter((task) => task.id !==id)
}

addTask(){
  this.addTaskFlag = true;
}
onCancelAddTask(){
  this.addTaskFlag =false;
}
}
