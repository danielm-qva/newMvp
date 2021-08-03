import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivoFTComponent } from './add-activo-ft.component';

describe('AddActivoFTComponent', () => {
  let component: AddActivoFTComponent;
  let fixture: ComponentFixture<AddActivoFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivoFTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivoFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
