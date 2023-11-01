import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogFormField } from '@core/models/form-dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent {
  public form = new FormGroup({});
  public errorVisibility = false;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      formFields: DialogFormField[];
      controls: string[];
    }
  ) {
    for (const field of data.formFields) {
      this.form.addControl(
        field.field,
        new FormControl('', [Validators.required])
      );
    }
  }

  closeDialog(event: Event) {
    if (this.form.status === 'INVALID') {
      event.preventDefault();
      this.errorVisibility = true;
      return;
    }
    this.dialogRef.close(this.form.getRawValue());
  }
}
