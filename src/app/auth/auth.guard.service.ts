import { map, tap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot,
                router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
                return this.authService.user.pipe(take(1), map(user => {
                    // na końcu dodaliśmy take(1) żeby unsucribe cały servie, ponieważ jak by tego nie było
                    // w tle cały czas działał by ten strażnik i mogło by dojść do efektów ubocznych
                    // ten zapis powoduje to samo jak user = !user
                    // konvertuje obiekt w zależności od zawartości jak jest null lub undefine to zwraca false
                    // jak zawiera dane zwraca true

                    // nowe rozwiązanie przekierowania jest oparte o UrlTree
                    const auth = !!user;
                    if (auth) {
                      return true;
                    }
                    return this.router.createUrlTree(['/auth']);
                    })
                    // stare rozwiązanie przekerowania jak nie jest zalogowany.

                    // , tap(isAuth => {
                    //   if (!isAuth) {
                    //    this.router.navigate(['/auth']);
                    //   }
                    // })
                    );
    }
}
