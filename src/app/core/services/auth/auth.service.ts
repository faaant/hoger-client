import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAuthInfo } from '@core/models/auth';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BaseService } from '@core/services/base-service/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(private httpClient: HttpClient, private router: Router) {
    super();
  }

  signIn(user: Partial<User>) {
    this.httpClient.post(this.apiUrls.signIn, user).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.httpClient.post(this.apiUrls.logout, null).subscribe(() => {
      this.router.navigate(['/auth/sign-in']);
    });
  }

  refresh(): Observable<unknown> {
    return this.httpClient.post(this.apiUrls.refresh, null);
  }

  getUserInfo(): UserAuthInfo {
    try {
      return jwt_decode(this.getCookie('ID-TOKEN'));
    } catch {
      return {};
    }
  }

  private getCookie(name: string) {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    throw ['Cant access cookie!'];
  }
}
