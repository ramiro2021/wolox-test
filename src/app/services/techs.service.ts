import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tech } from '../models/tech.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const base_url = environment.url_techs;

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  public totalCount: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAllTechs() {

    return this.http.get<Tech[]>(base_url)
      .pipe(
        catchError(
          this.handleError
        )
      );

  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
