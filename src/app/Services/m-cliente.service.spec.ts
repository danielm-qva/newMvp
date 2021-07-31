import { TestBed } from '@angular/core/testing';

import { MClienteService } from './m-cliente.service';

describe('MClienteService', () => {
  let service: MClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
