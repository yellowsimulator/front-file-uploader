import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authservice: AuthService) {
    // your logic here
  }


  loginWithGoogle() {
   this.authservice.loginWithGoogle();
  }

  

  loginWithMicrosoft() {
    this.authservice.loginWithMicrosoft();
  }


}
