import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor running');

    // Get the token from auth service.
    const authToken = this.auth.getAuthToken();

    if (!authToken) {
      console.log('interceptor without changes');

      return next.handle(request);
    }

    // Clone the request to add the new header.
    const authRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${authToken.accessToken}`,
      ),
    });

    console.log('interceptor running with new headers');

    // send the newly created request
    return next.handle(authRequest).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Response with HttpResponse type
            console.log('TAP function', event);
          }
        },
        (err: any) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.removeItem('token');
              this.router.navigate(['/auth']);
            }
          }
        },
      ),
    );
  }
}
