import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['../../../../styles/forms.scss']
})
export class ProductCreateComponent implements OnInit {
  public form!: FormGroup;
  private formSubmitAttempt = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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

}
