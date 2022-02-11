import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-brand-product-create',
  templateUrl: './brand-product-create.component.html',
  styleUrls: ['../../../../styles/forms.scss']
})
export class BrandProductCreateComponent implements OnInit {
  public form!: FormGroup;
  private formSubmitAttempt = false;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      brandName: ['', Validators.required],
    });
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

}
