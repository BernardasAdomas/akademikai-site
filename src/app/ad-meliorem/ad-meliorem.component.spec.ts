import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMelioremComponent } from './ad-meliorem.component';

describe('AdMelioremComponent', () => {
  let component: AdMelioremComponent;
  let fixture: ComponentFixture<AdMelioremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdMelioremComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdMelioremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
