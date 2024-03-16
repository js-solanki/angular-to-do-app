import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todoInput: Todo = {
    id: 0,
    title: '',
    isCompleted: false,
    isFavorite: false,
    date: new Date(),
    order: 0
  };

  completed: boolean = false;
  todo: Todo = {
    id: 0,
    title: '',
    isCompleted: false,
    isFavorite: false,
    date: new Date(),
    order: 0
  };

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.completed = !this.completed;
  }



  toggleClass(): any {
    if (this.completed) {
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
    }
  }

  deleteTodo(item: any) {
    this.todo = item;
    this.todoService.deleteTodo(item);

  }
  isFavorite() {
    this.todoInput.isFavorite = !this.todoInput.isFavorite;
    let index = this.todoService.todoList.indexOf(this.todoInput);
    this.todoService.todoList[index].isFavorite = this.todoInput.isFavorite;
    this.todoService.setToDoInLocalSotrage();
  }
}
