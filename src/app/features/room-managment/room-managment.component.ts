import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridItem } from '@core/models/grid';
import { Room, RoomActions, RoomFilterData } from '@core/models/room-managment';
import { RoomManagmentService } from '@core/services/room-managment/room-managment.service';
import {
  AVAILABLE_GRID_ACTIONS,
  COLUMNS,
  FILTERS,
} from '@features/room-managment/configs';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-room-managment',
  templateUrl: './room-managment.component.html',
  styleUrls: ['./room-managment.component.scss'],
})
export class RoomManagmentComponent {
  public data!: Room[];

  public columns = COLUMNS;
  public filters = FILTERS;
  public availableGridActions = AVAILABLE_GRID_ACTIONS;

  public filterForm = new FormGroup({});

  constructor(private roomManagmentService: RoomManagmentService) {
    this.roomManagmentService
      .getData()
      .pipe(map((result) => result.data))
      .subscribe((data) => {
        this.data = data;
      });
  }

  refreshGrid() {
    this.roomManagmentService
      .getData()
      .pipe(map((result) => result.data))
      .subscribe((data) => {
        this.data = data;
      });
  }

  filterRooms(event: RoomFilterData) {
    this.roomManagmentService
      .filterData(event)
      .pipe(map((result) => result.data))
      .subscribe((data) => {
        this.data = data;
      });
  }

  rowAction(event: { action: string; data: GridItem }) {
    switch (event.action) {
      case RoomActions.Book:
        this.roomManagmentService
          .createBook(event.data)
          .pipe(
            switchMap(() => this.roomManagmentService.getData()),
            map((result) => result.data)
          )
          .subscribe((refreshedData) => {
            this.data = refreshedData;
          });
        break;
      case RoomActions.Unbook:
        this.roomManagmentService
          .unbook(event.data)
          .pipe(
            switchMap(() => this.roomManagmentService.getData()),
            map((result) => result.data)
          )
          .subscribe((refreshedData) => {
            this.data = refreshedData;
          });
        break;
    }
  }
}
