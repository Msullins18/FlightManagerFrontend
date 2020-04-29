import { TestBed } from '@angular/core/testing';

import { AddFlightService } from './add-flight.service';

describe('AddFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFlightService = TestBed.get(AddFlightService);
    expect(service).toBeTruthy();
  });
});
