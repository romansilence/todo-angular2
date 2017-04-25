import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'; 

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
	title: string = '';

  constructor(private todoService: TodoService) { }
 
  onCreate() {
    if (this.title != '') {
      this.todoService.createTodo(this.title);
      this.title = '';
    }
  }

  ngOnInit() { 
  }
}