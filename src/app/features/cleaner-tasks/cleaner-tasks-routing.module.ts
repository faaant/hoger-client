import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanerTasksComponent } from './cleaner-tasks.component';

const routes: Routes = [{ path: '', component: CleanerTasksComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleanerTasksRoutingModule {}
