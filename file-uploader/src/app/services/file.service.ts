import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { credential } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
//http://file-uploader-server.azurewebsites.net
  getSasToken(): Observable<string> {
    return this.http.get<{ sasToken: string }>('https://file-uploader-server.azurewebsites.net/get-sas-token')
      .pipe(
        map(response => response.sasToken)
      );
  }
  
  uploadFile(sasToken: string, file: File): Observable<void> {
    const apiUrl = `https://${credential.accountName}.blob.core.windows.net/${credential.containerName}/${file.name}?${sasToken}`;
    return this.http.put(apiUrl, file, {
      headers: {
        'x-ms-version': '2020-02-10',
        'Content-Type': file.type,
        'x-ms-blob-type': 'Blockblob'
      }
    }).pipe(
      map(() => {})
    );
  }

}
