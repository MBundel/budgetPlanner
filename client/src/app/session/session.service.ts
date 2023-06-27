import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("username") != null;
  }
  setSessionStorage(username: string) {
    sessionStorage.setItem('username', username);
  }

  deleteSessionStorage() {
    sessionStorage.removeItem('username');
  }

}
