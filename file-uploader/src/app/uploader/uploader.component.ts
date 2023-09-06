import { Component } from '@angular/core';
import { FileService } from '../services/file.service';  // Replace with the actual path to your FileService
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  fileNames: string[] = [];
  files: File[] = [];
  uploadMessage: string | null = null;
  isLoading: boolean = false;
  

  constructor(private fileService: FileService) { }

  onFilesSelected(event: any): void {
    this.files = Array.from(event.target.files);
    this.fileNames = [];
    this.files.forEach(file => {
      this.fileNames.push(file.name);
    });
  }

  clearFiles(): void {
    this.files = [];
    this.fileNames = [];
  }

  onSend(): void {
    this.isLoading = true;
    this.uploadMessage = null; // Reset the message
    this.fileService.getSasToken().subscribe(
      sasToken => {
        const uploadObservables: Observable<void>[] = [];
        this.files.forEach((file) => {
          const uploadObservable = this.fileService.uploadFile(sasToken, file);
          uploadObservables.push(uploadObservable);
        });
        forkJoin(uploadObservables).subscribe(
          () => {
            this.uploadMessage = 'All files uploaded successfully!';
            this.clearFiles();
            this.isLoading = false;
          },
          error => {
            this.uploadMessage = 'There was an error uploading one or more files.';
            console.error('There was an error uploading files:', error);
            this.isLoading = false;
          }
        );
      },
      error => {
        this.uploadMessage = 'There was an error fetching the SAS token.';
        console.error('There was an error fetching the SAS token:', error);
        this.isLoading = false;
      }
    );
  }
}
