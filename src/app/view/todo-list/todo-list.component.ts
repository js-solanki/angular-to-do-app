import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  viewList: boolean = true;


  ngOnInit(): void {
    this.route.url.subscribe((data:any) => {
      if (data[0].path == 'list') {
        this.viewList = true;
      }
      else {
        this.viewList = false;
        this.todoService.updateFav();
      }
    })
  }

  drop($event:any){
    moveItemInArray(this.todoService.todoList, $event.previousIndex, $event.currentIndex);
    this.todoService.setToDoInLocalSotrage();
  }
}
