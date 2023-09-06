import { Component } from '@angular/core';
// import authservice
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private authservice: AuthService) {
    // your logic here
  }

  logOut() {
    return this.authservice.logout();
  }

  // get user
  get user() {
    return this.authservice.getUsername();
  }

}
