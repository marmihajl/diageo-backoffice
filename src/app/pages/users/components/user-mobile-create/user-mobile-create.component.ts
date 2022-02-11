import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-user-mobile-create',
  templateUrl: './user-mobile-create.component.html',
  styleUrls: ['../../../../styles/forms.scss']
})
export class UserMobileCreateComponent implements OnInit {
  public form!: FormGroup;
  public hidePassword = true;
  private formSubmitAttempt = false;

  public options: string[] = ['One', 'Two', 'Three'];
  public filteredOptions$!: Observable<string[]>;
  public isSearching: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      mobilePhone: ['', Validators.required],
      homePhone: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const userControl = this.form.get('user')
    if (userControl) {
      this.filteredOptions$ = userControl.valueChanges.pipe(
        startWith(''),
        debounceTime(500),
        map(value => this.search(value))
      );
    }
  }

  private search(value: string): string[] {
    this.isSearching = !!value
    const filterValue = value.toLowerCase();

    return this.options.filter(option => filterValue && option.toLowerCase().includes(filterValue));
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
