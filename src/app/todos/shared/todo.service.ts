import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../shared/todo.model';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoList: Todo[] = [];

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(environment.jsonbin.url, {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key
      })
    }).pipe(
      tap(
        (todoList : Todo[]) => { 
          this.todoList = todoList;
         },
        () => { }
      )
    );
    
  }

  post(todo: Todo) {
    const newTabTodo = [];
    this.todoList.forEach((item) => {
      newTabTodo.push(item);
    });
    newTabTodo.push(todo)
    return this.put(newTabTodo).pipe(
      tap(
        ()=> {
        this.todoList.push(todo);
      },
      () => { }
    ));
  }

  delete(todo: Todo) {

    const newTabTodo = [];
    this.todoList.forEach((item) => {
      if (item !== todo) {
        newTabTodo.push(item);
      }
    });
    return this.put(newTabTodo).pipe(
      tap(
        () => {
        const index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
      },
      () => { }
    ));
    
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




