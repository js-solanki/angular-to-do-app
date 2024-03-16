import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todo = '';
  date = new Date();

  constructor(public todoService: TodoService,public route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.addTodo(this.todo,this.date);
    this.todo = '';
    this.route.navigateByUrl('list');
  }

  onCancel(){
    this.route.navigateByUrl('list');
  }
}
