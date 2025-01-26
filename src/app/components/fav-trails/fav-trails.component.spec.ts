import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTrailsComponent } from './fav-trails.component';

describe('FavTrailsComponent', () => {
  let component: FavTrailsComponent;
  let fixture: ComponentFixture<FavTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavTrailsComponent]
    });
    fixture = TestBed.createComponent(FavTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
