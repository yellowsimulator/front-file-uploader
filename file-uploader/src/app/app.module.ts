import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion'; 

import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {NgFor, DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatNativeDateModule } from '@angular/material/core'; // For native date API
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UploaderComponent } from './uploader/uploader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploaderComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // initialize forebase app
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // initialize firebase auth service
    provideAuth(() => getAuth()),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
