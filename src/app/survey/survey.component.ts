import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatCardModule, MatButton],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {
  songEnding: string = '';
  songEndings: string[] = ['gražus, tas gerai', 'muša, tas gerai', 'myli, tas gerai', 'uždirba, tas gerai'];

  submitSurvey() {
    console.log('Survey submitted with song ending: ' + this.songEnding);
  }

  openDialogue(){
    console.log('Dialogue opened');
  }
}
