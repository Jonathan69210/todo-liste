import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public formTodo: FormGroup;

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formTodo = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
    console.log(this.formTodo);
  }

  /**
   * @param name 
   * @param description 
   */
  public save() {

    // this.formTodo.get("name").valid;
    // this.formTodo.get("description").valid;
    // this.formTodo.get("name").dirty;

    if (this.formTodo.valid) {
      this.router.navigate(['list']);
      return this.todoService.post({
        name: this.formTodo.get("name").value,
        description: this.formTodo.get("description").value,
      });
    }


  }



}
