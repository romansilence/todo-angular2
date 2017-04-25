import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@Input() todo: TodoModel;
	@Output() delete = new EventEmitter();
	@Output() toggle = new EventEmitter();
	@Output() edit   = new EventEmitter();

  editing: boolean = false;
  escaped: boolean = false;

  constructor() { }

  onToggle() {
  	this.toggle.emit(this.todo);
  }

  onDelete() {
  	this.delete.emit(this.todo);
  }

  onEdit(title: string) {
    this.editing = true;
  }

  getFocus(event) {
    event.target.focus();
  }

  stopEditing(newTitle: string) {
    if (this.escaped != true) {
      if (newTitle == '') {
        this.delete.emit(this.todo);
      } else {
        this.todo.title = newTitle;
        this.edit.emit(this.todo);
      }
    }
    this.escaped = false;
    this.editing = false;
  }    

  cancelEditing() {
    this.escaped = true;
    this.editing = false;
  }

  ngOnInit() {
  }

}
