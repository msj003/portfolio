import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyfiveComponent } from './thirtyfive.component';

describe('ThirtyfiveComponent', () => {
  let component: ThirtyfiveComponent;
  let fixture: ComponentFixture<ThirtyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
