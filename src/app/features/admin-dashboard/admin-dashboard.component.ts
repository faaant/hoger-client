import { Component } from '@angular/core';
import { UserAuthInfo } from '@core/models/auth';
import { AuthService } from '@core/services/auth/auth.service';
import { DASHBOARD_ITEMS } from '@features/admin-dashboard/constants/dashboard-items';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  public data = DASHBOARD_ITEMS;
  public userInfo!: UserAuthInfo;

  constructor(private authService: AuthService) {
    this.userInfo = this.authService.getUserInfo();
  }

  checkPosition(itemPositions: string[], userPosition: string | undefined) {
    if (userPosition) {
      return itemPositions.includes(userPosition);
    }
    return false;
  }
}
