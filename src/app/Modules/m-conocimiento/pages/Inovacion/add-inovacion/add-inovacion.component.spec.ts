import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInovacionComponent } from './add-inovacion.component';

describe('AddInovacionComponent', () => {
  let component: AddInovacionComponent;
  let fixture: ComponentFixture<AddInovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInovacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
