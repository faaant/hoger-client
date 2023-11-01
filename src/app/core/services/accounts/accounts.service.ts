import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountDto, CreateAccountDto } from '@core/models/accounts';
import { ACCOUNTS_DIALOG_FORM_FIELDS } from '@features/accounts/configs';
import { FormDialogComponent } from '@features/shared/components/form-dialog/form-dialog.component';
import { PopUpDialogComponent } from '@features/shared/components/pop-up-dialog/pop-up-dialog.component';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService extends BaseService {
  public formFields = ACCOUNTS_DIALOG_FORM_FIELDS;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private overlay: Overlay
  ) {
    super();
  }

  getData(message?: string): Observable<{ data: AccountDto[] }> {
    return this.httpClient
      .get<{ data: AccountDto[] }>(this.apiUrls.accounts)
      .pipe(
        tap(() => {
          if (message) {
            this.dialog.open(PopUpDialogComponent, {
              data: {
                messages: [message],
                status: true,
              },
              hasBackdrop: false,
              position: {
                top: '10px',
                right: '8px',
              },
              scrollStrategy: this.overlay.scrollStrategies.noop(),
            });
          }
        })
      );
  }

  createUser(): Observable<unknown> {
    return this.dialog
      .open(FormDialogComponent, {
        data: {
          formFields: this.formFields,
          controls: ['Create'],
        },
        panelClass: 'dialog',
        height: '520px',
        width: '400px',
      })
      .afterClosed()
      .pipe(
        switchMap((result: CreateAccountDto) => {
          if (result) {
            return this.httpClient.post(this.apiUrls.accounts, result);
          }
          return new Subject();
        })
      );
  }

  deleteUser(account: Partial<AccountDto>): Observable<unknown> {
    const payload = {
      username: account?.username,
    };
    return this.httpClient.delete(this.apiUrls.accounts, {
      body: payload,
    });
  }
}
