import { Component, OnInit, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { TodoModel } from '../../models/todo.model';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	todos: Observable<TodoModel[]>;
	currentState: string;

  constructor(private todoService: TodoService, 
  						private route: ActivatedRoute,
  						private router: Router ) {
  }

  toggle(todo: TodoModel) {
		this.todoService.toggleTodo(todo);
	}

	delete(todo: TodoModel) {
		this.todoService.deleteTodo(todo);
	}

	getTodos() {
		if (this.currentState == 'active') {
			return this.todoService.getRemainingTodos();			
		} else if (this.currentState == 'completed') {
			return this.todoService.getCompletedTodos();			
		} else {
			return this.todoService.todos;
		}
	}

	toggleAll() {
		this.todoService.toggleAllTodos();
	}

	isAllCompleted() {
		return this.todoService.isAllCompleted();
	}

	getCompletedCount() {
		return this.todoService.getCompletedTodos().length;
	}

  ngOnInit() {  
		if (this.route.snapshot.params['status'] != undefined && this.route.snapshot.url[0].path == 'share') {
      let url = this.route.snapshot.params['status'];
      let urlShare = this.todoService.stateFromLocal(url) || '';
      this.router.navigate(['', urlShare]);
    } else {
      this.route.params.subscribe((param) => this.currentState = param['status'] || '');
	 		this.getTodos();
    }
  }
}
