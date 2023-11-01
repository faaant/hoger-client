import { Injectable } from '@angular/core';
import { Route, CanLoad, UrlTree, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.data?.['roles']) {
      const roles = route.data['roles'] as Array<string>;
      const userInfo = this.authService.getUserInfo();
      if (!userInfo?.position || !roles.includes(userInfo.position)) {
        this.router.navigate(['dashboard']);
        return false;
      }
    }
    return true;
  }
}
