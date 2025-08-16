import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatStepperModule, MatCardModule, MatIconModule],
  templateUrl: './application-tracking.component.html',
  styleUrl: './application-tracking.component.scss'
})
export class ApplicationTrackingComponent {
  applications = [
    { id: 1, title: 'Software Engineering Intern', company: 'TechCorp', status: 2, feedback: '' },
    { id: 2, title: 'Marketing Intern', company: 'Marketify', status: 1, feedback: '' },
    { id: 3, title: 'Data Analyst Intern', company: 'DataWiz', status: 3, feedback: 'Great interview experience.' },
  ];
  statusSteps = ['Applied', 'Interview', 'Offer', 'Completed'];
  updateStatus(app: any, newStatus: number) {
    app.status = newStatus;
  }
  updateFeedback(app: any, feedback: string) {
    app.feedback = feedback;
  }
}
