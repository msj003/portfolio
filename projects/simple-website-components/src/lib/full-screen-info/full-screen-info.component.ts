import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Page, PageInfoModel } from '../models/PageInfoModel';

@Component({
  selector: 'lib-full-screen-info',
  templateUrl: './full-screen-info.component.html',
  styleUrls: ['./full-screen-info.component.css']
})
export class FullScreenInfoComponent implements OnInit {

  @Input() pageInfo: PageInfoModel;


  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    console.log(this.pageInfo);
    if(this.pageInfo.pages){
      var idx = 0;
      this.pageInfo.pages.forEach((page) => {
         this.pageInfo.pages[idx].pageId =  "fullPageId"+idx; 
         this.pageInfo.pages[idx].nextPage = this.pageInfo.pages[idx+1];
         this.pageInfo.pages[idx].previousPage = this.pageInfo.pages[idx-1];
         idx++;        
      });
    }
  }

  getBgColor(color){
    return {
      'background-color' : color
    }
  }

  scrollToNextPage(page:Page){
    console.log(page.nextPage.pageId);
    document.getElementById(page.nextPage.pageId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToPreviousPage(page:Page){
    console.log(page.previousPage.pageId);
    //document.getElementById(page.previousPage.pageId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.viewportScroller.scrollToPosition([0,0]);
  }

}
