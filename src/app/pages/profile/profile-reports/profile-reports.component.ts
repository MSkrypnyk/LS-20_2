import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-reports',
  templateUrl: './profile-reports.component.html',
  styleUrl: './profile-reports.component.scss'
})
export class ProfileReportsComponent {
  public reports = [
    {
      icons: 'person',
      title: 'Astro- psychological report',
      desc: 'Some short description of this type of report.',
    },

    {
      icons: 'calendar_today',
      title: 'Monthly prediction report',
      desc: 'Some short description of this type of report.',
    },
    {
      icons: 'domain_verification',
      title: 'Daily Prediction',
      desc: 'Some short description of this type of report.',
    },
    {
      icons: 'favorite_border',
      title: 'Love report',
      desc: 'Some short description of this type of report.',
    },
  ]
}
