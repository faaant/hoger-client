import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { AccountActions, AccountDto } from '@core/models/accounts';
import { GridItem } from '@core/models/grid';
import { AccountsService } from '@core/services/accounts/accounts.service';
import { AVAILABLE_GRID_ACTIONS, COLUMNS } from '@features/accounts/configs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  public data!: AccountDto[];
  public columns = COLUMNS;
  public availableGridActions = AVAILABLE_GRID_ACTIONS;

  constructor(private accountsService: AccountsService) {
    this.accountsService
      .getData()
      .pipe(map((result) => result.data))
      .subscribe((data) => {
        this.data = data;
      });
  }

  createRow() {
    this.accountsService
      .createUser()
      .pipe(
        switchMap(() => this.accountsService.getData()),
        map((result) => result.data)
      )
      .subscribe((data) => {
        this.data = data;
      });
  }

  rowAction(event: { action: string; data: GridItem }) {
    switch (event.action) {
      case AccountActions.Delete:
        this.accountsService
          .deleteUser(event.data)
          .pipe(
            switchMap(() => this.accountsService.getData()),
            map((result) => result.data)
          )
          .subscribe((data) => {
            this.data = data;
          });
        break;
    }
  }

  refreshGrid() {
    this.accountsService
      .getData()
      .pipe(map((result) => result.data))
      .subscribe((data) => {
        this.data = data;
      });
  }
}
