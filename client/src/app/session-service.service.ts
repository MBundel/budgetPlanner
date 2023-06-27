import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('username') !== null;
  }

  setSessionStorage(username: string) {
    sessionStorage.setItem('username', username);
  }

  deleteSessionStorage() {
    sessionStorage.removeItem('username');
  }
}
