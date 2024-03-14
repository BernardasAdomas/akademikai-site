import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { NewsArticle } from './news-article';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {

  private newsArticleUrl: string = '../assets/api/newsArticles.json'

  constructor(private http: HttpClient) { }

  getNewsArticles(rangeSkip: number, rangeTake: number): Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(this.newsArticleUrl)
      .pipe(
        map(data => data.slice(rangeSkip, rangeSkip + rangeTake)),
        // tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
