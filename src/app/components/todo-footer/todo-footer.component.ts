import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TodoModel } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

import { Observable } from 'rxjs/Observable';

import { MdDialog, MdDialogRef } from '@angular/material';
import { SharePopupComponent } from '../../components/share-popup/share-popup.component';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentState: string;
  selectedState: string;


  constructor(private todoService: TodoService, 
              private route: ActivatedRoute,
              public dialog: MdDialog,
              private router: Router) { 
    this.currentState = '';
  }

  openDialog(event) {
    event.preventDefault();
    let shareUrl: string;
    let dialogRef = this.dialog.open(SharePopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        shareUrl = result.slice(6);
        this.todoService.stateToLocal(shareUrl, this.currentState);
      }
    });
  }

  clearCompleted() {
  	this.todoService.deleteCompletedTodos();
  }

  getTodosCount() {
  	return this.todoService.todos.length;
  }

  getCompletedTodosCount() {
  	return this.todoService.getCompletedTodos().length;
  }

  getRemainingTodosCount() {
  	return this.todoService.getRemainingTodos().length;
  }

  ngOnInit() {
   if (this.route.snapshot.params['status'] != undefined && this.route.snapshot.url[0].path == 'share') {
      let url = this.route.snapshot.params['status'];
      let urlShare = this.todoService.stateFromLocal(url) || '';
      this.router.navigate(['', urlShare]);
    } else {
      this.route.params.subscribe((param) => this.currentState = param['status'] || '');
    }
  }
}
