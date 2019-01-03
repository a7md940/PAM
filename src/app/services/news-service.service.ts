import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private URL = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4';
  constructor(private http: HttpClient) { }

  // API CALL.
  fetchAllNews() {
    return this.http.get(this.URL)
      .pipe(
        // return articles array only
        map((result: any) => {
          if (result.status === 'ok') {
            return result.articles;
          }
        }),
        // change the publishedAt property from each article to formatted one using moment library.
        map(
          (article: any) => {
            article.map((item) => {
              item.publishedAt = moment.parseZone(item.publishedAt).format('MMM YYYY');
            });
            return article;
          }
        )
      );
  }
}
