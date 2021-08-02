import { TestBed } from '@angular/core/testing';

import { MProcesoService } from './m-proceso.service';

describe('MProcesoService', () => {
  let service: MProcesoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MProcesoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
