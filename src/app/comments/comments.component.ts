import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: [];
  commentForm;
  constructor() { }

  ngOnInit() {
    this.comments = JSON.parse(localStorage.getItem('comments')) || [];
  }

  addComment() {
    if (this.commentForm === '') {

    }
    // get data.
    const data = {
      creator: 'Default User',
      content: this.commentForm,
      date: moment.parseZone(moment.now()).format('MMM D, YYYY'),
      replays: []
    };


    // add data to localStorage.
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    localStorage.setItem('comments', JSON.stringify([...comments, data]));

    // reset textare.
    this.commentForm = '';

    // refresh comments.
    this.ngOnInit();
  }
}
