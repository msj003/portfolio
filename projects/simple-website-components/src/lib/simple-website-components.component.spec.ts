import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWebsiteComponentsComponent } from './simple-website-components.component';

describe('SimpleWebsiteComponentsComponent', () => {
  let component: SimpleWebsiteComponentsComponent;
  let fixture: ComponentFixture<SimpleWebsiteComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleWebsiteComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleWebsiteComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
