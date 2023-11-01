import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { GridComponent } from './components/grid/grid.component';
import { GridRowComponent } from './components/grid/components/grid-row/grid-row.component';
import { ToStringArrayPipe } from './pipes/to-string-array.pipe';
import { FilterComponent } from './components/grid/components/filter/filter.component';
import { PopUpDialogComponent } from './components/pop-up-dialog/pop-up-dialog.component';

@NgModule({
  declarations: [
    FormDialogComponent,
    GridComponent,
    GridRowComponent,
    ToStringArrayPipe,
    FilterComponent,
    PopUpDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [FormDialogComponent, GridComponent, PopUpDialogComponent],
})
export class SharedModule {}
