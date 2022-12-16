import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlideShowPageComponent } from './image-slide-show-page.component';

describe('ImageSlideShowPageComponent', () => {
  let component: ImageSlideShowPageComponent;
  let fixture: ComponentFixture<ImageSlideShowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSlideShowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSlideShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
