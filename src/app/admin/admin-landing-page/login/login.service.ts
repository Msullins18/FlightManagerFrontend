import { Injectable } from '@angular/core';
import { Admin } from 'src/app/shared/admin';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  login(admin: Admin): Observable<Admin>
  {
    const url = environment.adminAPIUrl + '/Login';

    return this.http.post<Admin>(url,admin,{headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    return throwError(err.message);
  }
}
