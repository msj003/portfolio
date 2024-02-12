import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-webgpu-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webgpu-demo.component.html',
  styleUrl: './webgpu-demo.component.css'
})
export class WebgpuDemoComponent implements OnInit{
  
  async ngOnInit() {
   await this.initializeWebGPU();
  }

  
  private async initializeWebGPU() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;

    if (!navigator.gpu) {
      console.error("WebGPU not supported on this browser.");
      return;
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      console.error("No appropriate GPUAdapter found.");
      return;
    }

    const device = await adapter.requestDevice();

    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }

    const context = canvas.getContext("webgpu");
    if (!context) {
      console.error("Failed to get WebGPU context.");
      return;
    }

    const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
    context.configure({
      device: device,
      format: canvasFormat,
    });

    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: context.getCurrentTexture().createView(),
        loadOp: "clear",
        clearValue: { r: 0.5, g: 0, b: 0.4, a: 1.0 },
        storeOp: "store",
      }]
    });

    pass.end();
    device.queue.submit([encoder.finish()]);
  }

}
