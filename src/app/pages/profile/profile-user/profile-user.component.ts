import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent {
  imageSrc: string = 'assets/img/user.jpg';
  public user = [
    {
      name: 'Angelica Jackson',
      profession: 'Analyzer'
    }
  ]
}
