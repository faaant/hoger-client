import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public form = new FormGroup<{ username: FormControl; password: FormControl }>(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }
  );

  public errorVisibility = false;

  constructor(private authService: AuthService) {}

  signIn(event: Event) {
    if (this.form.status === 'INVALID') {
      event.preventDefault();
      this.errorVisibility = true;
      return;
    }
    this.authService.signIn(this.form.getRawValue());
  }
}
