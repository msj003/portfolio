import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Page, PageInfoModel, PageTypes } from '../models/PageInfoModel';
import { ImageSlideShowPageComponent } from './image-slide-show-page/image-slide-show-page.component';
import { TextArticlePageComponent } from './text-article-page/text-article-page.component';

@Component({
  selector: 'lib-full-screen-info',
  standalone: true,
  imports: [CommonModule,ImageSlideShowPageComponent, TextArticlePageComponent],
  templateUrl: './full-screen-info.component.html',
  styleUrls: ['./full-screen-info.component.css']
})
export class FullScreenInfoComponent implements OnInit {

  @Input() pageInfo: any;
  pageTypes = PageTypes;

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    if(this.pageInfo.pages){
      var idx = 0;
      this.pageInfo.pages.forEach(() => {
         this.pageInfo.pages[idx].pageId =  "fullPageId"+idx; 
         this.pageInfo.pages[idx].nextPage = this.pageInfo.pages[idx+1];
         this.pageInfo.pages[idx].previousPage = this.pageInfo.pages[idx-1];
         idx++;        
      });
    }
  }

  getBgColor(color: string){
    return {
      'background-color' : color
    }
  }

  scrollToNextPage(page:Page){
    console.log(page.nextPage!.pageId);
    document.getElementById(page.nextPage!.pageId!)!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToPreviousPage(page:Page){
    console.log(page.previousPage!.pageId);
    document.getElementById(page.previousPage!.pageId!)!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToTop(){
    this.viewportScroller.scrollToPosition([0,0]);
  }

}
