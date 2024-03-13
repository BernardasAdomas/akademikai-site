import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
}
