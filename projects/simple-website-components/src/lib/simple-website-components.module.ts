import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWebsiteComponentsComponent } from './simple-website-components.component';
import { FullScreenInfoComponent } from './full-screen-info/full-screen-info.component';
import { TextArticlePageComponent } from './full-screen-info/text-article-page/text-article-page.component';
import { ImageSlideShowPageComponent } from './full-screen-info/image-slide-show-page/image-slide-show-page.component';



@NgModule({
  declarations: [SimpleWebsiteComponentsComponent, FullScreenInfoComponent, TextArticlePageComponent, ImageSlideShowPageComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleWebsiteComponentsComponent,FullScreenInfoComponent]
})
export class SimpleWebsiteComponentsModule { }
