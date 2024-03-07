import { Component, Input } from '@angular/core';
import { IHonoraryMember } from '../honorary-member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-honorary-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './honorary-member.component.html',
  styleUrl: './honorary-member.component.css'
})
export class HonoraryMemberComponent {
  @Input()
  member!: IHonoraryMember;
}
