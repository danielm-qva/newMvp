import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetrologiaComponent } from './add-metrologia.component';

describe('AddMetrologiaComponent', () => {
  let component: AddMetrologiaComponent;
  let fixture: ComponentFixture<AddMetrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMetrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
