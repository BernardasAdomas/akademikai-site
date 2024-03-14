import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomFactService {

  private funFactsUrl = 'assets/api/funFacts.json';

  constructor(private http: HttpClient) { }

  getRandomFact(): Observable<string> {
    return this.http.get<any[]>(this.funFactsUrl)
      .pipe(
        map(data => {
          const randomIndex = Math.floor(Math.random() * data.length);
          return data[randomIndex].fact;
        }),
        tap(fact => console.log('Random Fact: ', fact)),
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
