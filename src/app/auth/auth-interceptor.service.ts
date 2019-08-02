import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      // sprawdzenie czy jest użytkownik po to żeby nie dodawał parameru do każdego zapytania
      // tylko do tych jak jest zalogowany user
      if (!user) {
        return next.handle(req);
      }
      const modifiedReq = req.clone({ params: new HttpParams().set('auth', user.token)});
      return next.handle(modifiedReq);
    }));

  }
}

    // metoda pipe przyjmuje operatory takie jak map tap take exhaustMap
    // take - bierze tylko jedną wartość i automatycznie jest unsubscribe
    // exhaustMap - pozwala na wykonanie pierwszego observable czyli user i
    // przekazanie go do funkcji exhaustMap i wykorzystanie poprzedniego observable.
    // w naszym przypadku user jest przkazany i wykorzystana watrośc token
