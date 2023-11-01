import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { GridItem } from '@core/models/grid';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
})
export class GridRowComponent {
  @Input()
  public columnNames?: string[];

  @Input()
  public rowData!: GridItem;

  @Output()
  public rowAction = new EventEmitter<{ action: string; data: GridItem }>();

  rowControlClick(event: string) {
    this.rowAction.emit({ action: event, data: this.rowData });
  }

  public originalOrder(): number {
    return 0;
  }
}
