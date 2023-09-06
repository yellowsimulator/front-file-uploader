import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.scss']
})
export class UploadedFilesComponent {
  files: any[] = [];
  

  // files = [
  //   {
  //     uploadedBy: 'John Doe',
  //     fileName: 'file1.txt',
  //     date: new Date('2021-01-01')
  //   },
  //   {
  //     uploadedBy: 'Jane Doe',
  //     fileName: 'file2.txt',
  //     date: new Date('2021-02-02')
  //   },
  //   // ... more files
  // ];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getSasToken().subscribe(
      sasToken => {
        this.fileService.getAllFilesFromContainer(sasToken)
          .subscribe(
            data => {
              this.files = data;
            },
            error => {
              console.error('Error fetching file list:', error);
            }
          );
      },
      error => {
        console.error('Error fetching SAS token:', error);
      }
    );
  }

  downloadFile(fileName: string): void {
    // Implement your file download logic here
  }

// end of module
}
