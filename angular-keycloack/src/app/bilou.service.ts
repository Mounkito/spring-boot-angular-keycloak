import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Message {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class BilouService {
  private userUrl = 'http://localhost:9090/user';
  private adminUrl = 'http://localhost:9090/admin';

  constructor(private http: HttpClient) {}

  getUser(): Observable<Message> {
    return this.http.get<Message>(this.userUrl).pipe(
      tap((_) => this.log('fetched data')),
      catchError(this.handleError<Message>('getUser', {'message' :'error when fetching user'}))
    );
  }

  getAdmin(): Observable<Message> {
    return this.http.get<Message>(this.adminUrl).pipe(
      tap((_) => this.log('fetched data')),
      catchError(this.handleError<Message>('getAdmin', {'message' :'error when fetching admin'}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`BilouService: ${message}`);
  }
}
