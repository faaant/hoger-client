import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CleanerTask } from '@core/models/cleaner-tasks/cleaner-tasks.models';
import { Observable, tap } from 'rxjs';
import { BaseService } from '@core/services/base-service/base.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpDialogComponent } from '@features/shared/components/pop-up-dialog/pop-up-dialog.component';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class CleanerTasksService extends BaseService {
  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {
    super();
  }

  getData(message?: string): Observable<{ data: CleanerTask[] }> {
    return this.httpClient
      .get<{ data: CleanerTask[] }>(this.apiUrls.cleanerTasks)
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

  done(task: CleanerTask): Observable<unknown> {
    const payload = {
      roomId: task.roomId,
    };
    return this.httpClient.put(this.apiUrls.cleanerTasks, payload);
  }
}
