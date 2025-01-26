import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrailsplusComponent } from './all-trailsplus.component';

describe('AllTrailsplusComponent', () => {
  let component: AllTrailsplusComponent;
  let fixture: ComponentFixture<AllTrailsplusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTrailsplusComponent]
    });
    fixture = TestBed.createComponent(AllTrailsplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
