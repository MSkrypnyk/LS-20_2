import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrl: './profile-side.component.scss'
})
export class ProfileSideComponent {
  public strongSkills = [
    {
      skill: 'Analytics'
    },
    {
      skill: 'Perfectionism'
    },
    {
      skill: 'Analytics'
    },
  ]
  public weakSkills = [
    {
      skill: 'Perfectionism'
    },
    {
      skill: 'Analytics'
    }
  ]
}
