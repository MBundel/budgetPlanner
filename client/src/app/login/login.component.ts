import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../user-registration/user";
import {SessionService} from "../session/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "";
  response: number = 0;
  user: User = {username: '', password1: ''}

  constructor(private http: HttpClient, private router: Router, public sessionService: SessionService) {
  }

  ngOnInit() {
  }


  login() {
    console.log(this.user);
    this.http.post<number>('/api/login', {username:this.user.username, password:this.user.password1}).
    subscribe((response) => {
      this.response = response;
      console.log(response);

      if (this.response === 0) {
        this.errorMessage = 'Invalid username or password.';
        this.router.navigate(['/login']);
      } else {
        this.sessionService.setSessionStorage(this.user.username)
        this.router.navigate(['/api/login']);
      }
    })
  }

  /*
  login() {
    console.log(this.user);
    // Zurücksetzen des Fehlerfelds:
    // this. ... siehe save() user-registration
    this.http.post<number>('/api/login', {username: this.user.username, password: this.user.password1 }).subscribe(
      (response: HttpResponse<any>) => {
        this.sessionService.setSessionStorage(this.user.username)
        console.log('Login erfolgreich', response);
        this.response = response.body;
        this.router.navigate(['/user/{userId}', this.response?.userId]);
      },
      (error: HttpErrorResponse) => {
        console.log('Fehler beim Login', error);
        if(error.status === 400) {
          this.errorMessage = 'Username or password cannot be found.';
          this.router.navigate(['/api/login']);
        }
      }
    )
*/

    /*this.http.post<LoginResponse>('/api/login', this.user).
    subscribe(response => {
      this.response = response;
      if (this.response.userId === 0) {
        this.errorMessage = 'Invalid username or password.';
        this.router.navigate(['/api/login']);
      } else {
        this.sessionService.setSessionStorage(this.user.username)
        this.router.navigate(['/user/{username}', this.response.userId]);
      }
    })
     */


  logout() {
    this.sessionService.deleteSessionStorage();
    this.user = {username: '', password1: ''};
    this.response = 0;
    this.router.navigate(['/']);
  }

}
