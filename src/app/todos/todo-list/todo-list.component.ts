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
  public todoList: Todo[];

  constructor(private todoService: TodoService) {
    this.reload();
  }

  ngOnInit() { }

  delete(todo: Todo) {
    this.todoService.delete(todo);
  }

  reload() {
    this.todoService.get().subscribe(
      (todoList: Todo[]) => {
        this.error = false;
        this.todoList = this.todoService.todoList = todoList;
      },
      () => {
        this.error = true;
      });
  }

}
