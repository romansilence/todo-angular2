import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-share-popup',
  templateUrl: './share-popup.component.html',
  styleUrls: ['./share-popup.component.css']
})
export class SharePopupComponent implements OnInit {
  shareUrl: string;

  constructor(public dialogRef: MdDialogRef<SharePopupComponent>,
              private todoService: TodoService) {

  } 
  ngOnInit() {
    this.shareUrl = 'share/' + this.todoService.s4();
  }  
}
