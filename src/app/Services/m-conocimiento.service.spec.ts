import { TestBed } from '@angular/core/testing';

import { MConocimientoService } from './m-conocimiento.service';

describe('MConocimientoService', () => {
  let service: MConocimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MConocimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
