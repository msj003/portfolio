import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebgpuDemoComponent } from './webgpu-demo.component';

describe('WebgpuDemoComponent', () => {
  let component: WebgpuDemoComponent;
  let fixture: ComponentFixture<WebgpuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebgpuDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebgpuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
