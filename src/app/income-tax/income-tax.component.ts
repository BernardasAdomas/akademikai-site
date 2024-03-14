import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-income-tax',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './income-tax.component.html',
  styleUrl: './income-tax.component.css'
})
export class IncomeTaxComponent {
  imageUrl: string = '../../assets/gpm.png';
}
