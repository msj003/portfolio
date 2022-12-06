import { Component, Input, OnInit } from '@angular/core';
import { PageInfoModel } from '../models/PageInfoModel';

@Component({
  selector: 'lib-full-screen-info',
  templateUrl: './full-screen-info.component.html',
  styleUrls: ['./full-screen-info.component.css']
})
export class FullScreenInfoComponent implements OnInit {

  @Input() bgColor = '';
  @Input() pageInfo : PageInfoModel = new PageInfoModel();

  constructor() { }

  ngOnInit() {
    console.log(this.pageInfo);
  }

  getBgColor(color){
    return {
      'background-color' : color
    }
  }

}
