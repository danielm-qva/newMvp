import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcesoComponent } from './list-proceso.component';

describe('ListProcesoComponent', () => {
  let component: ListProcesoComponent;
  let fixture: ComponentFixture<ListProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
