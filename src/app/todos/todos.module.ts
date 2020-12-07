import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TodosComponent,
    TodoDetailComponent,
    TodoListComponent,
    TodoComponent],
    exports : [
      TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class TodosModule { }
