import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineListComponent } from './guideline-list.component';

describe('GuidelineListComponent', () => {
  let component: GuidelineListComponent;
  let fixture: ComponentFixture<GuidelineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelineListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuidelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
