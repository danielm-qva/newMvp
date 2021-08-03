import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeneInfrsEstrucComponent } from './list-gene-infrs-estruc.component';

describe('ListGeneInfrsEstrucComponent', () => {
  let component: ListGeneInfrsEstrucComponent;
  let fixture: ComponentFixture<ListGeneInfrsEstrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGeneInfrsEstrucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeneInfrsEstrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
