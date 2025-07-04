import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerJourneyComponent } from './career-journey.component';

describe('CareerJourneyComponent', () => {
  let component: CareerJourneyComponent;
  let fixture: ComponentFixture<CareerJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
