import { Component } from '@angular/core';

@Component({
  selector: 'app-home-poll',
  templateUrl: './home-poll.component.html',
  styleUrl: './home-poll.component.scss'
})
export class HomePollComponent {
  public poll = [
    {
      title: 'How was your day?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio enurna ultrice...',
      icons: 'calendar_today',
    },

    {
      title: 'Current Transist: 3rd House?',
      desc: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...',
      icons: 'schedule',
    }
  ]
}
