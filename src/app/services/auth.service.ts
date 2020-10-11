import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const base_url = environment.url_login;

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient, private route: Router) {

  }


  login(formData: User) {
    return this.http.post(base_url, formData)
      .pipe(
        catchError(
          this.handleError
        )
      );
  }

  logout(): void {
    localStorage.clear();
    console.log('Sesion cerrada');
    this.route.navigate(['/']);
  }

  userLogged() {
    return localStorage.getItem('token') || localStorage.getItem('temporalSession');
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


}
