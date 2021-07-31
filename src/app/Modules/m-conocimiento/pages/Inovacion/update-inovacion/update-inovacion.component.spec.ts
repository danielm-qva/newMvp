import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInovacionComponent } from './update-inovacion.component';

describe('UpdateInovacionComponent', () => {
  let component: UpdateInovacionComponent;
  let fixture: ComponentFixture<UpdateInovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInovacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
