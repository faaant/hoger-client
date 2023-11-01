import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterData, GridFilter } from '@core/models/grid';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input()
  public filter!: GridFilter;

  @Input()
  public filterForm!: FormGroup;

  public form = new FormGroup<FilterData>({
    comparisonValue: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.filter.fieldType === 'number') {
      this.form.addControl(
        'comparisonNumberSymbol',
        new FormControl('not selected')
      );
    }
    this.filterForm.setControl(this.filter.field, this.form);
  }
}
