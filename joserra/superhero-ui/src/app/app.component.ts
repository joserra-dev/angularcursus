import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import HeroDataComponent from './hero/hero-data/hero-data.component';
import { HeroService } from './services/hero.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarComponent,
    HttpClientModule,
    HeroDataComponent,
    FooterComponent,
  ],
})
export default class AppComponent {
  title: string = 'heroes-app';
}
