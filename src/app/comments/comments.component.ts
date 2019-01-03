import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  // news Title from ActivatedRoute.
  newsTitle = this.route.snapshot.params.title;

  // Arrat of current news comments.
  comments: [];

  // Comments Form.
  commentsForm: FormGroup = new FormGroup({
    'commentInput': new FormControl('', [
      Validators.maxLength(100),
      Validators.required,
    ])
  });

  constructor(private route: ActivatedRoute) { }

  // getter to commentInput.
  get commentInput() {
    return this.commentsForm.get('commentInput');
  }

  ngOnInit() {
    // if there's comments in localStorage assign it to the comments property.
    if (JSON.parse(localStorage.getItem('comments'))) {
      this.comments = JSON.parse(localStorage.getItem('comments'))[this.newsTitle];
    }
  }

  addComment() {
    // if Form is Valid.
    if (this.commentsForm.valid) {
      // get data from user.
      const data = {};
      data[this.newsTitle] = [{
        creator: 'Default User',
        content: this.commentsForm.value.commentInput,
        date: moment.parseZone(moment.now()).format('MMM D, YYYY'),
        replays: []
      }];

      // add data to localStorage.
      // get comments from localStorage and if isn't exist will be empty object.
      const comments = JSON.parse(localStorage.getItem('comments')) || {};

      // if comments exist in localStorage and comments of the current news.
      if (comments != null && comments[this.newsTitle]) {
        // add the new comment to current news comments Arrat.
        comments[this.newsTitle] = [...comments[this.newsTitle], ...data[this.newsTitle]];
      } else {
        // if there's no current news array => create it by adding the new comment.
        comments[this.newsTitle] = [...data[this.newsTitle]];
      }
      // add the comments to localStorage after mainuplations.
      localStorage.setItem('comments', JSON.stringify({ ...comments }));

      // reset textarea.
      this.commentsForm.reset();

      // refresh comments.
      this.ngOnInit();
    }
  }
}
