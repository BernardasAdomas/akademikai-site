import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HonoraryMemberService } from './honorary-members/honorary-member.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RouterOutlet, RouterLink, HonoraryMemberService, HttpClient]
})
export class AppComponent {
  title = 'akademikai';
}
