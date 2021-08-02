import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluaProveedorComponent } from './evalua-proveedor.component';

describe('EvaluaProveedorComponent', () => {
  let component: EvaluaProveedorComponent;
  let fixture: ComponentFixture<EvaluaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluaProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
