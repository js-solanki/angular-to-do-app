import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  fav :Todo[] = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      order : 0,
    },
   
  ];

  deleteTodo(item:Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.setToDoInLocalSotrage();
  }

  setToDoInLocalSotrage(){
    localStorage.setItem("todo", JSON.stringify(this.todoList));
  }

  getTodoFromLocalStorage(){
    let todo = localStorage.getItem("todo") !== null ? localStorage.getItem("todo")?.toString() : '[]';

    return JSON.parse(todo ? todo : '[]');
  }

  addTodo(title:string,date: Date) {
    let id = this.todoList.length + 2;
    let currentDate = new Date();
    currentDate.setHours(0,0,0); 
    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: date ? date : currentDate,
      title: title,
      order : this.todoList.length +1
    }
    this.todoList.unshift(item);
    this.setToDoInLocalSotrage();
  }

  updateFav(){ 
  }
}
