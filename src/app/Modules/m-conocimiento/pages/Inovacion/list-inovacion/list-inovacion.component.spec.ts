import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInovacionComponent } from './list-inovacion.component';

describe('ListInovacionComponent', () => {
  let component: ListInovacionComponent;
  let fixture: ComponentFixture<ListInovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInovacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
