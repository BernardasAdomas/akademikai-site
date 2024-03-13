import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { DidYouKnowComponent } from '../did-you-know/did-you-know.component';
import { SurveyComponent } from '../survey/survey.component';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CalendarComponent, DidYouKnowComponent, SurveyComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

}
