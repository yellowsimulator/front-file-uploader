import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.scss']
})
export class UploadedFilesComponent {

  files = [
    {
      uploadedBy: 'John Doe',
      fileName: 'file1.txt',
      date: new Date('2021-01-01')
    },
    {
      uploadedBy: 'Jane Doe',
      fileName: 'file2.txt',
      date: new Date('2021-02-02')
    },
    // ... more files
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch the files from the backend here
  }

  downloadFile(fileName: string): void {
    // Implement your file download logic here
  }

// end of module
}
