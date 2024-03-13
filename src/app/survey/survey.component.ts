import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogueComponent } from '../dialogue/dialogue.component';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatCardModule, MatButton, MatDialogModule, MatButtonModule, DialogueComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {

  constructor(public dialog: MatDialog) { }

  songEnding: string = '';
  songEndings: string[] = ['gražus, tas gerai', 'muša, tas gerai', 'myli, tas gerai', 'uždirba, tas gerai'];

  submitSurvey() {
    console.log('Survey submitted with song ending: ' + this.songEnding);
  }

  openDialogue() {
    const dialogRef = this.dialog.open(DialogueComponent);
  }
}
