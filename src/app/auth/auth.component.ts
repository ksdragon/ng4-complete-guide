import { Router } from '@angular/router';
import { AuthService, AuthRensponseData } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;


  constructor(private authService: AuthService,
              private router: Router) { }

  // przełączanie między ligin sing up.
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // ponowne sprawdzenie walidacji.
    if (!form.valid) {
      return;
    }
    const emali = form.value.email;
    const password = form.value.password;
    // utworzenie zmiennej typu observable typu AuthRensponseData
    // w celu subskrybowania powtarzającej się logiki.
    let authObs: Observable<AuthRensponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      // logowanie
      authObs = this.authService.login(emali, password);

    } else {
      // sing up
      authObs = this.authService.singup(emali, password);
    }

    // przypisanie logiki do zmiennej obs.
    authObs.subscribe(respData => {
      console.log(respData);
      this.isLoading = false;
      // po zalogowaniu autentykacji przekierowuje nas do:
      this.router.navigate(['/recipes']);
    },
      // errorMessage jest wzięty z authServise tam przygotowany za pomocą catchError
      // z biblioteki rxjs
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
