import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  public error: boolean;
  public disabled: boolean;
  public todoList: Todo[];

  constructor(private todoService: TodoService) {
    this.reload();
  }

  ngOnInit() { }

  ondelete(todo: Todo) {
    this.disabled = true;
    this.todoService.delete(todo).subscribe(
      () => {
        this.disabled = false;
       },
      () => { }
    )
  }

  reload() {
    this.todoService.get().subscribe(
      (todoList: Todo[]) => {
        this.error = false;
        this.todoList = todoList;
      },
      () => {
        this.error = true;
      });
  }
  

}
