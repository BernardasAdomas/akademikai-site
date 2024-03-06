import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryMemberListComponent } from './honorary-member-list.component';

describe('HonoraryMemberListComponent', () => {
  let component: HonoraryMemberListComponent;
  let fixture: ComponentFixture<HonoraryMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonoraryMemberListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HonoraryMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
