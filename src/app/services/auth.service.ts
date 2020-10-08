import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const base_url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient, private route: Router) {

  }


  login(formData: User): Observable<User> {
    return this.http.post(base_url, formData)
      .pipe(
        tap(resp => {
          localStorage.clear();
          console.log('Sesion iniciada');
        }
        ),
        catchError(
          error => {
            return of(error);
          }
        ));
  }


  logout(): void {
    localStorage.clear();
    console.log('Sesion cerrada');
    this.route.navigate(['/']);
  }


  userLogged() {
    return localStorage.getItem('token') || localStorage.getItem('temporalSession');
  }


}
