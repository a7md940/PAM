import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() itemCreatedAt;
  @Input() itemTitle;
  @Input() itemBackground;
  constructor() { }

  ngOnInit() {

  }

}
