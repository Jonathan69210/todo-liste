import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  public error: boolean;
  public todoDetail: Todo;

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get("name");
    this.todoDetail = this.todoService.todoList.find(element => element.name === name);
  }

  

}
