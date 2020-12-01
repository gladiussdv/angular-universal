import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    debugger;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id != null) {
        this.articlesService.getArticle(id).subscribe((article) => {
          this.article = article;
        });
      }
    });
  }

}
