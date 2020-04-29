import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAirportComponent } from './admin-add-airport.component';

describe('AdminAddAirportComponent', () => {
  let component: AdminAddAirportComponent;
  let fixture: ComponentFixture<AdminAddAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
