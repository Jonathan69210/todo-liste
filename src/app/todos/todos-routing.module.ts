import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [

  {
    path: "",
    component: TodosComponent,
    children : [
      {
        path: "list",
        component: TodoListComponent
      },
      {
        path: "todo",
        component: TodoComponent
      },
      {
        path: "detail/:name",
        component: TodoDetailComponent
      },
      {
        path: "**",
        redirectTo: "list"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
