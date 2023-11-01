import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@features/shared/shared.module';
import { RoomManagmentComponent } from './room-managment.component';
import { RoomManagmentRoutingModule } from './room-managment-routing.module';

@NgModule({
  declarations: [RoomManagmentComponent],
  imports: [CommonModule, RoomManagmentRoutingModule, SharedModule],
})
export class RoomManagmentModule {}
