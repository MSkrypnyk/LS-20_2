import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.scss'
})
export class HomeTasksComponent {
  public tasks = [
    {
      id: Date.now(),
      title: 'Daily astromeditation',
      number: 3,
    },
    {
      id: Date.now(),
      title: 'Daily sleep astromeditation',
      number: 2,
    },
    {
      id: Date.now(),
      title: 'Daily mantra',
      number: 1,
    }
  ]
}
