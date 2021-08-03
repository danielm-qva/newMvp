import { TestBed } from '@angular/core/testing';

import { MInfraestructuraService } from './m-infraestructura.service';

describe('MInfraestructuraService', () => {
  let service: MInfraestructuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MInfraestructuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
