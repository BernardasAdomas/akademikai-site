import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { NewsArticleService } from './news-article.service';
import { NewsArticle } from './news-article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [MatGridListModule, DatePipe, RouterModule, MatPaginatorModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {

  constructor(private newsArticleService: NewsArticleService) { }

  sub!: Subscription;
  errorMessage: string = '';
  newsArticles: NewsArticle[] = [];
  rangeSkip: number = 0;
  rangeTake: number = 5;


  // newsArticles: NewsArticle[] = [
  //   { date: new Date(2019, 3, 1), title: 'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1 },
  //   { date: new Date(2019, 3, 1), title: 'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1 },
  //   { date: new Date(2019, 3, 1), title: 'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1 },
  //   { date: new Date(2019, 3, 1), title: 'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1 },
  //   { date: new Date(2019, 3, 1), title: 'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1 }
  // ];

  ngOnInit() {
    this.sub = this.newsArticleService.getNewsArticles(this.rangeSkip, this.rangeTake).subscribe({
      next: newsArticles => {
        this.newsArticles = newsArticles;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
