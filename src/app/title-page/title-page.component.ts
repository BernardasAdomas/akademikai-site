import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { DidYouKnowComponent } from '../did-you-know/did-you-know.component';
import { SurveyComponent } from '../survey/survey.component';
import { NewsListComponent } from '../news-list/news-list.component';
import { IncomeTaxComponent } from '../income-tax/income-tax.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CalendarComponent, DidYouKnowComponent, SurveyComponent, NewsListComponent, IncomeTaxComponent, ContactsComponent,MatGridListModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

}
