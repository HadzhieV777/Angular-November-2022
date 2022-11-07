import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  private symbols: number = 250;

  // using @Input decorator bcs
  // article and aricleDesc will come from above in the articles component
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow: string;

  // articleDescLen is a counter which controls how many symbols to show
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  // this can also be done in the ngOnInit lifecycle hook
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle =
      this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc() : void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}

// ng g c component-name
//    - generates new component
//    - creates all the component files
//    - imports the component in declarations array inside main app modules
