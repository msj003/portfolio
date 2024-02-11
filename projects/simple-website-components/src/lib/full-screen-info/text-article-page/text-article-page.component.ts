import { Component, Input, OnInit } from '@angular/core';
import { TextArticlePage } from '../../models/PageInfoModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-text-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-article-page.component.html',
  styleUrls: ['./text-article-page.component.css']
})
export class TextArticlePageComponent implements OnInit {

  @Input() page!: TextArticlePage;
  constructor() { }

  ngOnInit() {
  }

}
