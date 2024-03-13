import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

}
