import { Component } from '@angular/core';
import { SessionService} from "./session/session.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  sessionService: SessionService;
    protected readonly Component = Component;

    constructor(private router: Router, sessionService: SessionService) {
      this.sessionService = sessionService;
    }


    logout(): void {
      this.sessionService.deleteSessionStorage();
      this.router.navigate(['/']);
    }



}
