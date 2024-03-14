import { Routes } from "@angular/router";
import { NewsListComponent } from "./news-list/news-list.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";

export const NEWS_ROUTES: Routes = [
    { path: '', component: NewsListComponent },
    { path: ':id', component: ArticleDetailComponent }
];