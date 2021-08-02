import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEmanationResidualesComponent } from './post-emanation-residuales.component';

describe('PostEmanationResidualesComponent', () => {
  let component: PostEmanationResidualesComponent;
  let fixture: ComponentFixture<PostEmanationResidualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEmanationResidualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEmanationResidualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
