import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientError } from '../interfaces/client-error';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(this.mapErrors(error));
      }),
    );
  }

  mapErrors(error: HttpErrorResponse): ClientError {
    let { message } = error?.error;

    if (error.status === 0) {
      message = 'You have a poor internet connection. Please try again!';
    }

    return { message, status: error.status };
  }
}
