import { Component, OnInit } from '@angular/core';
import { FullScreenInfoComponent } from 'simple-website-components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FullScreenInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  pageInfoModel: any ;
  constructor() { }

  ngOnInit() {
    this.pageInfoModel = {
      'pages': [
        {
          'pageTitle' : 'Welcome',
           'bgColor': 'grey',
           'pageType': 'TextArticlePage',
           'articleText': 'I am a software developer with experience in a variety of technology. I have worked on large scale enterprise solutions being responsible for frontend, backend. My primary tech stack is .NET 5/6, Angular 2+, SQL Server, Linux/Bash, Azure. Python, AWS, CosmosDB would be my secondary technologies. This portfolio website is currently hosted on AWS. My experience ranges from building, supporting microservices on Azure to supporting thousands of servers on VmWare. Scroll down to look at some of my recent personal projects. '
        },
        {
          'pageTitle' : 'Projects',
           'bgColor': '#20838c',
           'pageType': 'ImageSlideShowPage',
           'imagesData': [
              {
                'imageTitle' : 'Components library - Angular',
                'imageLink' : 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
                'hrefTo' : 'https://github.com/msj003/portfolio/tree/master/projects/simple-website-components',
                'imageDesc' : 'This is one of my personal projects that has a published npm library. This library was used to build the website you are looking at. Purpose of this library project is to make it easy to create slide show type websites.'
              },
              {
                'imageTitle' : 'LedSort',
                'imageLink' : 'https://images.unsplash.com/photo-1545164415-0fae860defbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'hrefTo' : 'https://github.com/msj003/LedSort',
                'imageDesc' : 'Project is based on an ESP32 board and utilises WS2812b leds. It runs different sorting algorithms to sort the random colors in a LED strip. Purpose of the project is to visualise the movement of array elements during a sort operation.'
              },
              {
                'imageTitle' : 'Blog',
                'imageLink' : 'www.googl.com/3',
                'hrefTo' : '',
                'imageDesc' : 'Project is to make a simple blog system. This is still under construction...'
              }
           ]
        }
      ]
    }
  }

}
