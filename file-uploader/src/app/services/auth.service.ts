import { Injectable } from '@angular/core';
import { Auth, getAuth, signInWithPopup,
         GoogleAuthProvider, signOut, onAuthStateChanged 
       } from '@angular/fire/auth';
import { OAuthProvider, User } from '@angular/fire/auth';

import {inject} from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private auth: Auth = inject(Auth);
  private user: User | null = null; // Store the user information


  constructor(private router: Router) {
    this.auth = getAuth();

    // Listen for authentication state changes
    onAuthStateChanged(this.auth, user => {
      this.isAuthenticated = !!user;
      this.user = user; // Store the user information
      // console.log("User: ", user?.displayName || "No user")
      // console.log(this.isAuthenticated)
      if (this.isAuthenticated) {
        this.router.navigate(['/uploader']); // Navigate to the home page
      }
    });
  }

  // Login with Google
  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
    // Set isAuthenticated to true after successful login
    this.isAuthenticated = true;
    this.router.navigate(['/uploader']); // Navigate to the home page
  }


  // Login with Microsoft
  async loginWithMicrosoft(): Promise<void> {
    const provider = new OAuthProvider('microsoft.com'); // Use 'microsoft.com' provider
    await signInWithPopup(this.auth, provider);
    // Set isAuthenticated to true after successful login
    this.isAuthenticated = true;
    this.router.navigate(['/uploader']); // Navigate to the home page
  }


  

  // Logout
  async logout(): Promise<void> {
    await signOut(this.auth);
    // Set isAuthenticated to false after successful logout
    this.isAuthenticated = false;
    this.user = null; // Clear the user information
    this.router.navigate(['/login']); // Navigate to the logi page
  }



  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Get the logged-in user's name
  getUsername(): string {
    return this.user ? this.user.displayName || 'Unknown User' : 'Not Logged In';
  }
}
