import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuidelineListComponent } from './guideline-list/guideline-list.component';
import { HonoraryMemberListComponent } from './honorary-members/honorary-member-list/honorary-member-list.component';
import { FundComponent } from './fund/fund.component';
import { SymbolListComponent } from './symbol-list/symbol-list.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { DonationsComponent } from './donations/donations.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LinksListComponent } from './links/links-list/links-list.component';

export const routes: Routes = [
    { path: 'apie-mus', component: AboutUsComponent, pathMatch: 'full' },
    { path: 'apie-mus/veiklos-gaires', component: GuidelineListComponent, pathMatch: 'full' },
    { path: 'apie-mus/garbes-nariai', component: HonoraryMemberListComponent, pathMatch: 'full' },
    { path: 'apie-mus/zenklai', component: SymbolListComponent, pathMatch: 'full' },
    { path: 'apie-mus/vyduno-fondas', component: FundComponent, pathMatch: 'full' },
    { 
        path: 'naujienos',
        loadChildren: () => import('./news/news.routes').then(m => m.NEWS_ROUTES)
    },
    { path: 'parama', component: DonationsComponent, pathMatch: 'full' },
    { path: 'kalendorius', component: CalendarComponent, pathMatch: 'full' },
    { path: 'nuorodos', component: LinksListComponent, pathMatch: 'full'},
    { path: '', component: TitlePageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
