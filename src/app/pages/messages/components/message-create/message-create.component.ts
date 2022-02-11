import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['../../../../styles/forms.scss']
})
export class MessageCreateComponent implements OnInit {
  public form!: FormGroup;
  private formSubmitAttempt = false;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.required],
      textBody: ['', Validators.required],
      shortText: ['', Validators.required],
      url: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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
