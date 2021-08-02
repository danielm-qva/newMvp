import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWastedMaterialsComponent } from './post-wasted-materials.component';

describe('PostWastedMaterialsComponent', () => {
  let component: PostWastedMaterialsComponent;
  let fixture: ComponentFixture<PostWastedMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWastedMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWastedMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
