import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileSideComponent } from './profile-side/profile-side.component';
import { ProfileReportsComponent } from './profile-reports/profile-reports.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileUserComponent,
    ProfileSideComponent,
    ProfileReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ProfileModule { }
