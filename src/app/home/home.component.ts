import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageInfoModel ;
  constructor() { }

  ngOnInit() {
    this.pageInfoModel = {
      'pages': [
        {
          'pageTitle' : 'This is My first Page',
          'bgColor': 'yellow'
        },
        {
          'pageTitle' : 'This is My Second Page',
          'bgColor': 'red'
        },
        {
          'pageTitle' : 'This is My Third Page',
          'bgColor': 'blue'
        }
      ]
    }
  }

  onScroll1($element): void {
    
    // console.log($element);
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    document.getElementById("scroll1").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
