import { Component } from '@angular/core';
import { NewsArticle } from '../news-article';
import { ActivatedRoute } from '@angular/router';
import { NewsArticleService } from '../news-article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  pageTitle: string = 'Article Detail';
  errorMessage: string = '';
  article: NewsArticle | undefined;

  constructor(private route: ActivatedRoute, private articleService: NewsArticleService) { }

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getArticle(id);
    }
  }

  //TODO this is bad and should be changed
  //the amount of news articles shouldn't be hardcoded
  //but this is becouse it's all in a json database for now
  getArticle(id: number): void {
    this.articleService.getNewsArticles(0,20).subscribe({
      next: article => this.article = article.find(a => a.id == id),

      error: err => this.errorMessage = err
    });
  }

}
