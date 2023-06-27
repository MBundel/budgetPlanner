import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SessionServiceService} from "../session-service.service";
import {User} from "../user-registration/user";
import {LoginResponse} from "./loginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, public sessionService: SessionServiceService) {
  }

  errorMessage: string = "";
  response?: LoginResponse = {userId: 0};
  user: { password1: string; username: string } = {username: '', password1: ''}

  ngOnInit() {
  }

  login() {
    this.http.post<LoginResponse>('/api/login', this.user).
    subscribe(response => {
      this.response = response;
      if (this.response.userId === 0) {
        this.errorMessage = 'Invalid username or password.';
        this.router.navigate(['/']);
      } else {
        this.sessionService.setSessionStorage(this.user.username)
        this.router.navigate(['/user', this.response.userId]);
      }
    })
  }

  logout() {
    this.sessionService.deleteSessionStorage();
    this.user = {username: '', password1: ''};
    this.response = {userId: 0};
    this.router.navigate(['/login']);
  }

}
