import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenInfoComponent } from './full-screen-info.component';

describe('FullScreenInfoComponent', () => {
  let component: FullScreenInfoComponent;
  let fixture: ComponentFixture<FullScreenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
