import { Injectable } from '@angular/core';

import { TodoModel } from '../models/todo.model';

@Injectable()
export class TodoService {

	todos: TodoModel[];

  constructor() { 
    if (localStorage.length) {
      let todosPers = localStorage.getItem('todos-roman');
      this.todos = JSON.parse(todosPers).map((item) => {
                        let todo = new TodoModel(item.title);
                        todo.completed = item.completed;
                        todo.id = item.id;
                        return todo;
                      });
    } else {
      this.todos = [];
    } 
  }

  getTodos(): TodoModel[] {
  	return this.todos;
  }	

  createTodo(title: string) {
  	let todo = new TodoModel(title);
		this.todos.push(todo);
    this.toLocalStorage();
  }

  deleteTodo(todo: TodoModel) {
  	let index = this.todos.indexOf(todo);

  	if (index > -1) {
  		this.todos.splice(index, 1);
      this.toLocalStorage();
  	}
  }

  toggleTodo(todoItem: TodoModel) {
  	let todo = this.findTodoById(todoItem.id);

  	if (todo) {
  		todo.completed = !todo.completed; 
  	}
    this.toLocalStorage();     
  }

  editTodo(todoItem: TodoModel) {
  	let todo = this.findTodoById(todoItem.id);

  	if (todo) {
  		todo.title = todoItem.title;  		
  	}  	
  }

  isAllCompleted() {
  	return this.todos.length == this.getCompletedTodos().length;
  }

  toggleAllTodos() {
  	let completed = this.getCompletedTodos().length,
			  total = this.todos.length;

		if (completed == total) {
			this.todos.forEach((item: TodoModel) => {item.completed = false});
		} else {
			this.todos.forEach((item: TodoModel) => {item.completed = true});			
		}
    this.toLocalStorage();
  }

  getRemainingTodos() {
		return this.todos.filter((item: TodoModel) => { return item.completed == false });
	}

	getCompletedTodos() {
		return this.todos.filter((item: TodoModel) => { return item.completed == true });
	}

	deleteCompletedTodos() {
		this.todos = this.todos.filter((item: TodoModel) => { return item.completed == false });
	  this.toLocalStorage();
  }


  toLocalStorage() {
    localStorage.setItem('todos-roman', JSON.stringify(this.todos));
  }

  stateToLocal(key: string, state: string) {
    localStorage.setItem(key, state);
    return key;
  }
  stateFromLocal(key: string) {
    let state = localStorage.getItem(key);
    return state || '';
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  findTodoById(id: number) {
    return this.todos.find((todo) => todo.id == id);
  }
}
