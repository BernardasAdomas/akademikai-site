import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-did-you-know',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './did-you-know.component.html',
  styleUrl: './did-you-know.component.css'
})
export class DidYouKnowComponent {
  randomFact: string = 'Vienas dramblys sveria mažiau nei mėlynojo banginio liežuvis.';

}
