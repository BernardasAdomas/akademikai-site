import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVytisComponent } from './our-vytis.component';

describe('OurVytisComponent', () => {
  let component: OurVytisComponent;
  let fixture: ComponentFixture<OurVytisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurVytisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurVytisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
