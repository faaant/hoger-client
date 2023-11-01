import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CleanerTasksComponent } from './cleaner-tasks.component';
import { CleanerTasksRoutingModule } from './cleaner-tasks-routing.module';

@NgModule({
  declarations: [CleanerTasksComponent],
  imports: [
    CommonModule,
    CleanerTasksRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class CleanerTasksModule {}
