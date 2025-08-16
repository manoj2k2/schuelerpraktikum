import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {
  profileForm: FormGroup;
  editing = false;

  constructor(private fb: FormBuilder) {
    // Example initial data, replace with real data source
    this.profileForm = this.fb.group({
      name: ['John Doe', Validators.required],
      email: ['john.doe@email.com', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[0-9\- ]*$/)]],
      school: [''],
    });
  }

  enableEdit() {
    this.editing = true;
  }

  save() {
    if (this.profileForm.valid) {
      this.editing = false;
      // Save logic here
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  cancel() {
    this.editing = false;
    // Optionally reset form to original values
  }
}
