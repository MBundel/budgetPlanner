import { Component } from '@angular/core';
import { User } from "./user";
import {HttpClient, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  newUser: User = {username: '', email: '', password1: '', password2: ''};

  constructor(private http: HttpClient, private router: Router) {
  }

  save() {
    // Zurücksetzen der Fehlerfelder
    this.newUser.usernameError = '';
    this.newUser.emailError = '';
    this.newUser.password1Error = '';
    this.newUser.password2Error = '';

    this.http.post('/api/registration', this.newUser, { observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Benutzer erfolgreich registriert', response);
        /*this.newUser = {
          username: '',
          email: '',
          password1: '',
          password2: ''
        };
         */
        this.router.navigate(['/success']);
      },
      (error: HttpErrorResponse) => {
        console.log('Fehler bei der Benutzerregistrierung', error);
        if (error.status === 400) {
          /*const errors = error.error;
          this.newUser.usernameError = errors.username;
          this.newUser.emailError = errors.email;
          this.newUser.password1Error = errors.password1;
          this.newUser.password2Error = errors.password2;
           */
          this.newUser.usernameError = 'The field USERNAME must not be empty.';
        } else if (error.status === 403) {
          this.newUser.usernameError = 'Username is already in use.';
        } else if (error.status === 409) {
          this.newUser.emailError = 'Email address is already in use.';
        } else if (error.status === 405) {
          this.newUser.emailError = 'Please enter a valid email address.';
        } else if (error.status === 411) {
          this.newUser.password1Error = 'Your password must have at least 8 characters.';
        }else if (error.status === 406) {
          this.newUser.password1Error = 'Password 1 and password 2 do not match.';
        }
        else {
          this.newUser.usernameError = 'AN UNKNOWN MISTAKE';
          this.newUser.emailError = 'MISTAKE HAS OCCURRED';
          this.newUser.password1Error = 'FIND SHELTER';
          this.newUser.password2Error = '!!!!!!'
        }
      }
    );
  }
}
