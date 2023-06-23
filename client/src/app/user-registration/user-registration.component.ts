import { Component } from '@angular/core';
import { User } from "./user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  newUser: User = {username: '', email: '', password1: '', password2: ''};

  constructor(private http: HttpClient) {
  }

  save() {
    this.http.post('/api/registration', this.newUser).subscribe(
      response => {
        console.log('Benutzer erfolgreich registriert', response);
      },
      error => {
        console.log('Fehler bei der Benutzerregistrierung', error);
      }
    );
  }
}
