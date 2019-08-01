import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;

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

    if (this.isLoginMode) {
      // ..
    } else {
      this.authService.singup(emali, password).subscribe(respData => {
        console.log(respData);
      }, error => {
        console.log(error);
      });
    }
    form.reset();
  }
}
