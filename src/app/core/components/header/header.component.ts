import { Component } from '@angular/core';
import { User } from '@core/models/auth';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user?: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUserInfo();
  }

  logout() {
    this.authService.logout();
  }
}
