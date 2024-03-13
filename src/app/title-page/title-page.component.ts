import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { DidYouKnowComponent } from '../did-you-know/did-you-know.component';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CalendarComponent, DidYouKnowComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

}
