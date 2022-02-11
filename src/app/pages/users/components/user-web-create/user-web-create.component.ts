import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-web-create',
  templateUrl: './user-web-create.component.html',
  styleUrls: ['../../../../styles/forms.scss']
})
export class UserWebCreateComponent implements OnInit {
  public form: FormGroup;
  public hidePassword = true;
  private formSubmitAttempt = false;

  constructor( private fb: FormBuilder) {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      /* try {
      } catch (err) {
        this.loginInvalid = true;
      } */
    } else {
      this.formSubmitAttempt = true;
    }
  }

  generatePassword() {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    this.form.patchValue({ password })
  }

}
