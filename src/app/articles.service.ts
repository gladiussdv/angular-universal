import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article, ArticleCard} from './article';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiBase = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
  articleCardsPath = '/article-cards';
  articlesPath = '/articles';

  constructor(private http: HttpClient) {}

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiBase}${this.articlesPath}/${id}`);
  }

  getArticleCards(): Observable<ArticleCard[]> {
    debugger;
    return this.http.get<ArticleCard[]>(
      // `${this.apiBase}${this.articleCardsPath}`
      `${this.apiBase}`
    ).pipe(tap((data: ArticleCard[]) => {
      console.log(data)
    }));
  }
}
