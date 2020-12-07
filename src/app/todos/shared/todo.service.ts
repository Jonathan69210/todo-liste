import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../shared/todo.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public error: boolean;
  public todoList: Todo[] = [];

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(environment.jsonbin.url, {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key
      })
    });
  }

  post(todo: Todo) {

    const newTabTodo = [];
    this.todoList.forEach((item) => {
      newTabTodo.push(item);
    });
    newTabTodo.push(todo)
    this.put(newTabTodo).subscribe(
      () => {
        this.error = false;
        this.todoList.push(todo);
      },
      () => {
        this.error = true;
       }
    );
  }

  delete(todo: Todo): Todo {

    const newTabTodo = [];
    this.todoList.forEach((item) => {
      if (item !== todo) {
        newTabTodo.push(item);
      }
    });

    this.put(newTabTodo).subscribe(
      () => {
        this.error = false;
        const index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
      },
      () => { 
        this.error = true;
      }
    );
    return todo;
  }

  put(todoList: Todo[]): Observable<Todo[]> {
    return this.http.put<Todo[]>(environment.jsonbin.url, todoList, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "secret-key": environment.jsonbin.key,
        "versioning": "false"
      })
    });
  }
}




