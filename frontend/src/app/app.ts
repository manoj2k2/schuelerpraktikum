import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  template: `
    <mat-toolbar color="primary" class="main-toolbar">
      <span class="app-title">School Internship</span>
      <span class="spacer"></span>
      <button mat-icon-button [matMenuTriggerFor]="mainMenu" aria-label="Open main menu">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <mat-menu #mainMenu="matMenu">
      <button mat-menu-item routerLink="/student/dashboard" aria-label="Dashboard"><mat-icon>dashboard</mat-icon> Dashboard</button>
      <button mat-menu-item routerLink="/student/profile" aria-label="Profile"><mat-icon>person</mat-icon> Profile</button>
      <button mat-menu-item routerLink="/student/create-profile" aria-label="Create Profile"><mat-icon>person_add</mat-icon> Create Profile</button>
      <button mat-menu-item routerLink="/student/internship-search" aria-label="Internship Search"><mat-icon>search</mat-icon> Internship Search</button>
      <button mat-menu-item routerLink="/student/application-tracking" aria-label="Application Tracking"><mat-icon>track_changes</mat-icon> Application Tracking</button>
      <button mat-menu-item routerLink="/student/feedback-upload" aria-label="Feedback Upload"><mat-icon>cloud_upload</mat-icon> Feedback Upload</button>
    </mat-menu>
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styles: [
    `.spacer { flex: 1 1 auto; }`,
    `.main-toolbar { position: sticky; top: 0; z-index: 100; }`,
    `.app-title { font-weight: bold; font-size: 1.3rem; letter-spacing: 0.5px; }`,
    `.main-content { padding: 1.5rem 0.5rem; min-height: 80vh; }`,
    `@media (max-width: 600px) { .app-title { font-size: 1.05rem; } .main-content { padding: 0.5rem 0.1rem; } }`
  ],
})
export class App {
  protected readonly title = signal('frontend-app');
}
