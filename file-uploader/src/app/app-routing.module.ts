import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { UploaderComponent } from './uploader/uploader.component';
import { UploadedFilesComponent } from './uploaded-files/uploaded-files.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'uploader', component: UploaderComponent , canActivate: [AuthGuard] },
  { path: 'uploaded-files', component: UploadedFilesComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
