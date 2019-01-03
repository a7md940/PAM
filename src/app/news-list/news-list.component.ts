import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  isLoading: boolean = false;
  apiError;
  news;
  topNews;

  constructor(private newsServices: NewsServiceService) { }

  ngOnInit() {
    // isLoading -> true.
    this.isLoading = true;

    // fetch news.
    this.newsServices.fetchAllNews().subscribe(
      res => {
        // set isLoading -> false.
        this.isLoading = false;

        // set news into localStorage to access it locally.
        localStorage.setItem('news', JSON.stringify(res));
        const news = JSON.parse(localStorage.getItem('news'));

        // news field = news from localStorage.
        this.news = news;

        // splice the top 6 news.
        this.topNews = [...news].splice(0, 6);
      },
      err => {
        this.isLoading = false;
        this.apiError = JSON.stringify(err.statusText);
      });
  }

}
