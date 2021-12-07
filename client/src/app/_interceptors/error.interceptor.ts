import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          console.log(error)

          switch (error.status) {
            case 400:
              this._snackBar.open('⚠️ Error 400: ' + error.error);
              break;
            case 401:
              this._snackBar.open('⚠️ Error 401: Unauthorized');
              break;
            case 404:
              this._snackBar.open('⚠️ Error 404: Not Found');
              break;
            case 500:
              this._snackBar.open('⚠️ Server Error');
              break;
            default:
              this._snackBar.open('⚠️ Something unexpected went wrong');
              break;
          }
        }
        return throwError(error);
      })
    )
  }
}