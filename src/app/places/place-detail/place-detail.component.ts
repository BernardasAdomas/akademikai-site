import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Place } from '../place';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.css'
})
export class PlaceDetailComponent {
  @Input() place!: Place;
}
