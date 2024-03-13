import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent {
}
