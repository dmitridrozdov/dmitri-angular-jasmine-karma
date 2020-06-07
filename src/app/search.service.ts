import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { TennisPlayer } from './tennisPlayers';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  playersUrl = "/api/players";
  constructor(private http: HttpClient) { }

  getAllTennisPlayers(): Observable<TennisPlayer[]> {
    return this.http.get<TennisPlayer[]>(this.playersUrl).pipe(
      tap(players => console.log("players: " + JSON.stringify(players))),
      catchError(this.handleError<TennisPlayer[]>([]))
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
