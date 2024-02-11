import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArticlePageComponent } from './text-article-page.component';

describe('TextArticlePageComponent', () => {
  let component: TextArticlePageComponent;
  let fixture: ComponentFixture<TextArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextArticlePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
