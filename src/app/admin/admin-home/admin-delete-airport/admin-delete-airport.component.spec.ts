import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteAirportComponent } from './admin-delete-airport.component';

describe('AdminDeleteAirportComponent', () => {
  let component: AdminDeleteAirportComponent;
  let fixture: ComponentFixture<AdminDeleteAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
