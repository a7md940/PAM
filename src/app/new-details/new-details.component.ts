import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent implements OnInit {

  new;

  constructor(
    private newsService: NewsServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // when component load scroll it to top.
    window.scrollTo(0, 0);

    // fetch only one item by its title from localStorage.
    this.new = (JSON.parse(localStorage.getItem('news')) as Array<any>)
      .find(item => item.title === this.route.snapshot.params.title);
  }

}
