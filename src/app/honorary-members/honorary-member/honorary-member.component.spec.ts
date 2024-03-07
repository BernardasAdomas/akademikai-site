import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryMemberComponent } from './honorary-member.component';

describe('HonoraryMemberComponent', () => {
  let component: HonoraryMemberComponent;
  let fixture: ComponentFixture<HonoraryMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonoraryMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HonoraryMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
