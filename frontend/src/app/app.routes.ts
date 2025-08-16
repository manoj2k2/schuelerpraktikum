import { Routes } from '@angular/router';
import { studentRoutes } from './student/student.routes';

export const routes: Routes = [
  {
    path: 'student',
    children: studentRoutes,
  },
];
