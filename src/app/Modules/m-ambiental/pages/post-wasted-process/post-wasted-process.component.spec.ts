import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWastedProcessComponent } from './post-wasted-process.component';

describe('PostWastedProcessComponent', () => {
  let component: PostWastedProcessComponent;
  let fixture: ComponentFixture<PostWastedProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWastedProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWastedProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
