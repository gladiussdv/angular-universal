import { Component, OnInit } from '@angular/core';
import {ArticleCard} from '../article';
import {ArticlesService} from '../articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articleCards: ArticleCard[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.getArticleCards().subscribe((cards) => {
      this.articleCards = cards;
    });
  }

}
