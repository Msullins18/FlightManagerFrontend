import { TestBed } from '@angular/core/testing';

import { AirportDeleteService } from './airport-delete.service';

describe('AirportDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirportDeleteService = TestBed.get(AirportDeleteService);
    expect(service).toBeTruthy();
  });
});
