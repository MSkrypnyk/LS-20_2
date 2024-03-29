import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { HomePollComponent } from './home-poll/home-poll.component';
import { ProgressComponent } from '../../shared/progress/progress.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
    declarations: [
      HomeComponent,
      HomeNewsComponent,
      HomeTasksComponent,
      HomePollComponent,
      ProgressComponent,
      
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],

  })
  export class HomeModule { }
