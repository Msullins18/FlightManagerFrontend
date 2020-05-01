import { TestBed } from '@angular/core/testing';

import { DeleteFlightService } from './delete-flight.service';

describe('DeleteFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteFlightService = TestBed.get(DeleteFlightService);
    expect(service).toBeTruthy();
  });
});
