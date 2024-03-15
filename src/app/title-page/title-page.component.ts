import { Component } from '@angular/core';
import { DidYouKnowComponent } from '../did-you-know/did-you-know.component';
import { SurveyComponent } from '../survey/survey.component';
import { NewsListComponent } from '../news/news-list/news-list.component';
import { IncomeTaxComponent } from '../income-tax/income-tax.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, DidYouKnowComponent, SurveyComponent, NewsListComponent, IncomeTaxComponent, ContactsComponent,MatGridListModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

}
