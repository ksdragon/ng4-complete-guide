import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;

  constructor(private authService: AuthService) { }
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

    this.isLoading = true;
    if (this.isLoginMode) {
      // ..
    } else {
      this.authService.singup(emali, password).subscribe(respData => {
        console.log(respData);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
    }
    form.reset();
  }
}
