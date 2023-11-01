import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomManagmentComponent } from './room-managment.component';

const routes: Routes = [{ path: '', component: RoomManagmentComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomManagmentRoutingModule {}
