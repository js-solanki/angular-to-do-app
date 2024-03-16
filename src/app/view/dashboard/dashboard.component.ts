import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentTask: Todo[] ;
  upcomingTask : Todo[];
  favouriteTask : Todo[];
  previousTask : Todo[];
  currentDate = new Date();
  
  constructor(private todoService: TodoService){
    this.currentDate.setHours(0,0,0);

    console.log(this.todoService.todoList);
    this.currentTask = this.todoService.todoList.filter((ele:Todo)=>{
      console.log(ele.date,this.currentDate);
      return ele.date == this.currentDate;
    })
    this.upcomingTask = this.todoService.todoList.filter((ele:Todo)=>{
      return ele.date > this.currentDate;
    })
    this.previousTask = this.todoService.todoList.filter((ele:Todo)=>{
      return ele.date < this.currentDate;
    })

    this.favouriteTask = this.todoService.fav;
  }
  
}
