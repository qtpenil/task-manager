import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private TOKEN_KEY = 'token';

  constructor(private router : Router) { }

  login(token : string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  
}
