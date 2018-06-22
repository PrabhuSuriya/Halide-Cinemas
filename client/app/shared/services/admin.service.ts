import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { MovieModel } from '../models/cinema';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private moviesApi: string = '/api/v1/cinema';
  constructor(private _http: HttpClient) {}

  public getMovies(): Observable<MovieModel[] | any> {
    return this._http.get(this.moviesApi).pipe(catchError(err => throwError(err)));
  }

  public getMovie(id: string): Observable<MovieModel> {
    return this._http.get(`${this.moviesApi}/${id}`).pipe(catchError(err => throwError(err)));
  }
}
