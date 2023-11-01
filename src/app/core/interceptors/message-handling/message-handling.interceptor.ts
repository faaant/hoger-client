import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { PopUpDialogComponent } from '@features/shared/components/pop-up-dialog/pop-up-dialog.component';

@Injectable()
export class MessageHandlingInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog, private overlay: Overlay) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          if (event.body?.message) {
            this.dialog.open(PopUpDialogComponent, {
              data: {
                messages: event.body.message,
                status: event.status,
              },
              hasBackdrop: false,
              position: {
                top: '10px',
                right: '8px',
              },
              scrollStrategy: this.overlay.scrollStrategies.noop(),
            });
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let messages: string[] = [];
        if (error.error?.message) {
          messages = Array.isArray(error.error.message)
            ? error.error.message
            : [error.error.message];
        } else {
          messages = [error.message];
        }
        this.dialog.open(PopUpDialogComponent, {
          data: {
            messages,
            status: error.ok,
          },
          hasBackdrop: false,
          position: {
            top: '10px',
            right: '8px',
          },
          scrollStrategy: this.overlay.scrollStrategies.noop(),
        });
        return throwError(() => messages);
      })
    );
  }
}
