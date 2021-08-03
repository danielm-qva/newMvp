import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilesHComponent } from './add-utiles-h.component';

describe('AddUtilesHComponent', () => {
  let component: AddUtilesHComponent;
  let fixture: ComponentFixture<AddUtilesHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilesHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
