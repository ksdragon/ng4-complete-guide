import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfejs zgodnie z tym co zwraca baza firebase
interface AuthRensponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  singup(email: string, password: string) {
    return this.http.post<AuthRensponseData>
      // link pobrany z dokumentacji api z firebase w ustawieniach
      // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBr430chns0S6gtEYxNlvk0khErKYmDUE4',
      // obiekt jaki oczekuje basa firebase zgodnie z dokumentacją.
    {
      email,
      password,
      returnSecureToken: true
    });
  }
}
