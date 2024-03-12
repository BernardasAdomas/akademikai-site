import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHonoraryMember } from '../honorary-member';
import { HonoraryMemberService } from '../honorary-member.service';
import { RouterModule } from '@angular/router';
import { HonoraryMemberComponent } from '../honorary-member/honorary-member.component';

@Component({
  selector: 'app-honorary-member-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HonoraryMemberComponent],
  templateUrl: './honorary-member-list.component.html',
  styleUrl: './honorary-member-list.component.css'
})
export class HonoraryMemberListComponent implements OnInit, OnDestroy{
  
  constructor(private honoraryMemberService: HonoraryMemberService) { }
  
  sub!: Subscription;
  errorMessage: string = '';
  honoraryMembers: IHonoraryMember[] = [];
  bothOrganizationMembers: IHonoraryMember[] = [];
  organizationASDMembers: IHonoraryMember[] = [];
  organizationKorpVytisMembers: IHonoraryMember[] = [];

  ngOnInit() {
    this.sub = this.honoraryMemberService.getHonoraryMembers().subscribe({
      next: honoraryMembers => {
        this.honoraryMembers = honoraryMembers;
        this.bothOrganizationMembers = honoraryMembers.filter(member => member.organization === 'ASD ir Korp! Vytis');
        this.organizationASDMembers = honoraryMembers.filter(member => member.organization === 'ASD');
        this.organizationKorpVytisMembers = honoraryMembers.filter(member => member.organization === 'Korp! Vytis');
      },
      error: err => this.errorMessage = err
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
