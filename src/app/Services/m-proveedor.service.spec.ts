import { TestBed } from '@angular/core/testing';

import { MProveedorService } from './m-proveedor.service';

describe('MProveedorService', () => {
  let service: MProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
