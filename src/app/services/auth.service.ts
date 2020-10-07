import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const base_url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }


  login(formData: User): Observable<User> {
    return this.http.post(base_url, formData)
      .pipe(
        tap(resp =>
          console.log(resp)
        ),
        catchError(
          error => {
            return of(error);
          }
        ));
  }

}
