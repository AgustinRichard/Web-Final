import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCityComponent } from './hero-city.component';

describe('HeroCityComponent', () => {
  let component: HeroCityComponent;
  let fixture: ComponentFixture<HeroCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
