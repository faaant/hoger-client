import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  GridItem,
  GridControllersActions,
  AvailableGridActions,
  GridFilter,
  GridFilterData,
} from '@core/models/grid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  //add output parametr to emit Book or Unbook with row value
  @Input()
  public data!: GridItem[];
  @Input()
  public columns!: string[];

  @Input()
  public availableGridActions!: AvailableGridActions;

  @Input()
  public filters: GridFilter[] = [];

  @Input()
  public filterForm: FormGroup = new FormGroup({});

  @Output()
  public rowAction = new EventEmitter<{ action: string; data: GridItem }>();

  @Output()
  public rowCreate = new EventEmitter<void>();

  @Output()
  public gridRefresh = new EventEmitter<void>();

  @Output()
  public filterData = new EventEmitter<GridFilterData>();

  public actions = GridControllersActions;

  gridControlClick(event: string): void {
    switch (event) {
      case this.actions.Create:
        this.rowCreate.emit();
        break;
      case this.actions.Refresh:
        this.gridRefresh.emit();
        break;
    }
  }

  rowControllersAction(event: { action: string; data: GridItem }) {
    this.rowAction.emit(event);
  }

  filter() {
    this.filterData.emit(this.filterForm.getRawValue());
  }
}
