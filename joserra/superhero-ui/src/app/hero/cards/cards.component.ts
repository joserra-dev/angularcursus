import { Component, OnInit, inject } from '@angular/core';
import HeroDataComponent from '../hero-data/hero-data.component';
import {
  HeroInterface,
  HeroResponse,
  HeroService,
} from 'src/app/services/hero.service';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HeroDataComponent, HeroCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  selectedHeroName!: string;
  selectedHero!: HeroInterface;
  heroNames: string[] = [];
  heroService = inject(HeroService);

  ngOnInit(): void {
    this.heroNames = this.heroService.getHeroesNames();
    this.selectedHeroName = this.heroNames[0];
    this.getHeroData();
  }

  setHero(hero: Event) {
    const target = hero.target as HTMLSelectElement;
    this.selectedHeroName = target.value;
    this.getHeroData();
  }

  getHeroData() {
    this.heroService
      .getSuperHeroData(this.selectedHeroName)
      .subscribe((data) => {
        const hero = data as HeroResponse;
        this.selectedHero = hero.results[0];
      });
  }
}
