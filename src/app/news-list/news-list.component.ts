import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

export interface NewsArticle {
  date: Date;
  title: string;
  preview: string;
  id: number;
}


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [MatGridListModule, DatePipe, RouterModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  newsArticles: NewsArticle[] = [
    {date: new Date(2019, 3, 1),title:'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1},
    {date: new Date(2019, 3, 1),title:'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1},
    {date: new Date(2019, 3, 1),title:'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1},
    {date: new Date(2019, 3, 1),title:'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1},
    {date: new Date(2019, 3, 1),title:'Korporacijų sąskrydis - Kauno kultūrinis tranzitas: nuo prieškarinio iki šiuolaikinio', preview: 'Brangūs korporantai, norime Jus pakviesti į  Korporacijų sąskrydį, kuris vyks kovo 30 d. KTU Santakos slėnio konferencijų salėje, Kaune.', id: 1}
  ];
}
