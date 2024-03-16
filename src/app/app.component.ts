import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-to-do-app';

  constructor(private todoService: TodoService){
      this.todoService.todoList = this.todoService.getTodoFromLocalStorage();
  }
}
