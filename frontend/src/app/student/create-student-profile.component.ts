import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const CREATE_STUDENT = gql`
  mutation CreateStudent($name: String!, $email: String!) {
    createStudent(student: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-create-student-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './create-student-profile.component.html',
  styleUrls: ['./create-student-profile.component.scss']
})
export class CreateStudentProfileComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private fb: FormBuilder,
    private apollo: Apollo,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = false;
    const { name, email } = this.form.value;
    this.apollo.mutate({
      mutation: CREATE_STUDENT,
      variables: { name, email }
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        setTimeout(() => this.router.navigate(['/student/dashboard']), 1200);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
      }
    });
  }
}
