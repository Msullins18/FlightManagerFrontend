import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerRegisterComponent } from './traveler-register.component';

describe('TravelerRegisterComponent', () => {
  let component: TravelerRegisterComponent;
  let fixture: ComponentFixture<TravelerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
