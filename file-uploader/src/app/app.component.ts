import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'; // Make sure to import from the correct path
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'File uploader';
  constructor(public authService: AuthService) { }
  
}
