import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private TOKEN_KEY = 'token';

  constructor(private router : Router, private http: HttpClient) { }

  login(token : string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  loginApi(credentials: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/login`,
      credentials
  );
}


  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  
}
