import { Component } from '@angular/core';
import { CleanerTask } from '@core/models/cleaner-tasks/cleaner-tasks.models';
import { CleanerTasksService } from '@core/services/cleaner-tasks/cleaner-tasks.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cleaner-tasks',
  templateUrl: './cleaner-tasks.component.html',
  styleUrls: ['./cleaner-tasks.component.scss'],
})
export class CleanerTasksComponent {
  public data$!: Observable<CleanerTask[]>;

  constructor(private cleanerTasksService: CleanerTasksService) {
    this.data$ = this.cleanerTasksService
      .getData()
      .pipe(map((result) => result.data));
  }

  refresh() {
    this.data$ = this.cleanerTasksService
      .getData()
      .pipe(map((result) => result.data));
  }

  done(task: CleanerTask) {
    this.cleanerTasksService.done(task).subscribe(() => {
      this.refresh();
    });
  }
}
