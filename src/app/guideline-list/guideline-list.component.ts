import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-guideline-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './guideline-list.component.html',
  styleUrl: './guideline-list.component.css'
})
export class GuidelineListComponent {

}
