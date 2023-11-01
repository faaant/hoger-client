import { NgModule } from '@angular/core';
import { SharedModule } from '@features/shared/shared.module';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AccountsComponent],
  imports: [AccountsRoutingModule, SharedModule, MatDialogModule],
})
export class AccountsModule {}
