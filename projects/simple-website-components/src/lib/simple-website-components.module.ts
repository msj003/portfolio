import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWebsiteComponentsComponent } from './simple-website-components.component';
import { FullScreenInfoComponent } from './full-screen-info/full-screen-info.component';



@NgModule({
  declarations: [SimpleWebsiteComponentsComponent, FullScreenInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleWebsiteComponentsComponent,FullScreenInfoComponent]
})
export class SimpleWebsiteComponentsModule { }
