import { Component, Input, OnInit } from '@angular/core';
import { ImageSildeShowPage } from '../../models/PageInfoModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-image-slide-show-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slide-show-page.component.html',
  styleUrls: ['./image-slide-show-page.component.css']
})
export class ImageSlideShowPageComponent implements OnInit {

  @Input() page: any
  constructor() { }

  ngOnInit() {
    if(this.page.imagesData){
      var idx = 0;
      this.page.imagesData.forEach(() => {
        this.page.imagesData[idx].imageIndex =  idx;
         this.page.imagesData[idx].imageId =  "carousel__slide"+idx; 
         idx++;
         console.log(this.page);        
      });
    }
  }

  openWebPage(){
    console.log("Click received");
  }

}
