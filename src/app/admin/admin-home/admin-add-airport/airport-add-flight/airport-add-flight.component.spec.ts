import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportAddFlightComponent } from './airport-add-flight.component';

describe('AirportAddFlightComponent', () => {
  let component: AirportAddFlightComponent;
  let fixture: ComponentFixture<AirportAddFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportAddFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportAddFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
