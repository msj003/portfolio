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
          'pageTitle' : 'Welcome',
           'bgColor': 'grey',
           'pageType': 'TextArticlePage',
           'articleText': 'This is Test Data for article 1'

        },
        {
          'pageTitle' : 'More Information',
           'bgColor': 'red',
           'pageType': 'TextArticlePage',
           'articleText': 'This is Test Data for article 2'
        },
        {
          'pageTitle' : 'Continue``',
           'bgColor': 'blue',
           'pageType': 'ImageSlideShowPage',
           'slideshowData': [
              {
                'imageTitle' : 'image 1',
                'imageLink' : 'www.googl.com/1'
              },
              {
                'imageTitle' : 'image 2',
                'imageLink' : 'www.googl.com/2'
              },
              {
                'imageTitle' : 'image 3',
                'imageLink' : 'www.googl.com/3'
              }
           ]
        },
        {
          'pageTitle' : 'More Info ds324  rmation',
           'bgColor': 'green',
           'pageType': 'TextArticlePage',
           'articleText': 'This is Test Data for article 3'
        },
        {
          'pageTitle' : 'Continue 324324 ``',
           'bgColor': 'blue',
           'pageType': 'ImageSlideShowPage'
        }
      ]
    }
  }

}
