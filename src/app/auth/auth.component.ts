import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],

  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
