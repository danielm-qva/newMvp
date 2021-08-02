import { TestBed } from '@angular/core/testing';

import { MAmbientalService } from './m-ambiental.service';

describe('MAmbientalService', () => {
  let service: MAmbientalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MAmbientalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
