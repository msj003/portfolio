import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlideShowPageComponent } from './image-slide-show-page.component';

describe('ImageSlideShowPageComponent', () => {
  let component: ImageSlideShowPageComponent;
  let fixture: ComponentFixture<ImageSlideShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSlideShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageSlideShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
