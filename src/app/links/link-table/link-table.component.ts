import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-link-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './link-table.component.html',
  styleUrl: './link-table.component.css'
})
export class LinkTableComponent {
  @Input() title!: string;
  @Input() dataSource!: any[];
}
