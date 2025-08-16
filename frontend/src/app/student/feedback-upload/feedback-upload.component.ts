import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feedback-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatProgressBarModule, MatIconModule],
  templateUrl: './feedback-upload.component.html',
  styleUrls: ['./feedback-upload.component.scss']
})
export class FeedbackUploadComponent {
  uploadProgress = 0;
  uploading = false;
  uploadSuccess = false;
  uploadError = '';
  uploadedFile: File | null = null;
  uploadedFileUrl: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    if (!this.uploadedFile) return;
    this.uploading = true;
    this.uploadProgress = 0;
    this.uploadSuccess = false;
    this.uploadError = '';

    // Simulate upload progress
    const interval = setInterval(() => {
      if (this.uploadProgress < 100) {
        this.uploadProgress += 10;
      } else {
        clearInterval(interval);
        this.uploading = false;
        this.uploadSuccess = true;
        // Simulate a download URL for the uploaded file
        this.uploadedFileUrl = URL.createObjectURL(this.uploadedFile!);
      }
    }, 200);
  }

  viewFile() {
    if (this.uploadedFileUrl) {
      window.open(this.uploadedFileUrl, '_blank');
    }
  }
}
