import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProteccionComponent } from './add-proteccion.component';

describe('AddProteccionComponent', () => {
  let component: AddProteccionComponent;
  let fixture: ComponentFixture<AddProteccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProteccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
