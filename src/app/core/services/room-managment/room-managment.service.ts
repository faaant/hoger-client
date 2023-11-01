import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Room, RoomFilterData } from '@core/models/room-managment';
import { ROOM_MANAGMENT_DIALOG_FORM_FIELDS } from '@features/room-managment/configs';
import { FormDialogComponent } from '@features/shared/components/form-dialog/form-dialog.component';
import { BaseService } from '@core/services/base-service/base.service';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { PopUpDialogComponent } from '@features/shared/components/pop-up-dialog/pop-up-dialog.component';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class RoomManagmentService extends BaseService {
  public formFields = ROOM_MANAGMENT_DIALOG_FORM_FIELDS;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private overlay: Overlay
  ) {
    super();
  }

  getData(message?: string): Observable<{ data: Room[] }> {
    return this.httpClient
      .get<{ data: Room[] }>(this.apiUrls.roomManagment)
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

  createBook(room: Partial<Room>): Observable<unknown> {
    return this.dialog
      .open(FormDialogComponent, {
        data: {
          formFields: this.formFields,
          controls: ['Create'],
        },
        panelClass: 'dialog',
        height: '370px',
        width: '400px',
      })
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result) {
            result.roomId = room?.id ?? result.roomId;
            return this.httpClient.post(this.apiUrls.orders, result);
          }
          return new Subject();
        })
      );
  }

  unbook(room: Partial<Room>): Observable<unknown> {
    const payload = {
      roomId: room.id,
    };
    return this.httpClient.put(this.apiUrls.orders, payload);
  }

  filterData(filters: RoomFilterData): Observable<{ data: Room[] }> {
    return this.httpClient.post<{ data: Room[] }>(
      this.apiUrls.roomManagmentFilter,
      filters
    );
  }
}
