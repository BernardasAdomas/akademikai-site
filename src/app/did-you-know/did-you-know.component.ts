import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RandomFactService } from './random-fact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-did-you-know',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './did-you-know.component.html',
  styleUrl: './did-you-know.component.css'
})
export class DidYouKnowComponent {

  constructor(private randomFactService: RandomFactService) { }

  sub!: Subscription;
  errorMessage: string = '';
  randomFact: string = 'asd';

  ngOnInit() {
    this.sub = this.randomFactService.getRandomFact().subscribe({
      next: fact => this.randomFact = fact,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
