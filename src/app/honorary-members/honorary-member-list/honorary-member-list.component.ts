import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHonoraryMember } from '../honorary-member';
import { HonoraryMemberService } from '../honorary-member.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-honorary-member-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
  organizationKorpVytisembers: IHonoraryMember[] = [];

  ngOnInit() {
    this.sub = this.honoraryMemberService.getHonoraryMembers().subscribe({
      next: honoraryMembers => {
        this.honoraryMembers = honoraryMembers;
        this.bothOrganizationMembers = honoraryMembers.filter(member => member.organization === 'ASD ir Korp! Vytis');
        this.organizationASDMembers = honoraryMembers.filter(member => member.organization === 'ASD');
        this.organizationKorpVytisembers = honoraryMembers.filter(member => member.organization === 'Korp! Vytis');
      },
      error: err => this.errorMessage = err
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
