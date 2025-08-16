import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

import { InternshipSearchComponent } from './internship-search/internship-search.component';
import { ApplicationTrackingComponent } from './application-tracking/application-tracking.component';
import { FeedbackUploadComponent } from './feedback-upload/feedback-upload.component';
import { CreateStudentProfileComponent } from './create-student-profile.component';

export const studentRoutes: Routes = [
  {
    path: 'dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'profile',
    component: StudentProfileComponent,
  },
  {
    path: 'create-profile',
    component: CreateStudentProfileComponent,
  },
  {
    path: 'internship-search',
    component: InternshipSearchComponent,
  },
  {
    path: 'application-tracking',
    component: ApplicationTrackingComponent,
  },
  {
    path: 'feedback-upload',
    component: FeedbackUploadComponent,
  },
    {
    path: 'create-profile',
    component: CreateStudentProfileComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
