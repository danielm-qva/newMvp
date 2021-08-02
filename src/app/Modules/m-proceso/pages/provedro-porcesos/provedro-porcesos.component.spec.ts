import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedroPorcesosComponent } from './provedro-porcesos.component';

describe('ProvedroPorcesosComponent', () => {
  let component: ProvedroPorcesosComponent;
  let fixture: ComponentFixture<ProvedroPorcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedroPorcesosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedroPorcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
