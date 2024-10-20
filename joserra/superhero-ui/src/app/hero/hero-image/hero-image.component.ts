import { Component } from '@angular/core';
import {
  HeroInterface,
  HeroResponse,
  HeroService,
} from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.scss',
})
export class HeroImageComponent {
  heroNames!: string[];
  selectedHeroName!: string;
  hero!: HeroInterface;
  imageUrl!: string;

  constructor(private readonly heroService: HeroService) {
    this.heroNames = this.heroService.getHeroesNames();
    this.selectedHeroName = this.heroNames[0];
  }

  setHero($event: Event): void {
    const selectedHeroValue = $event.target as HTMLSelectElement;
    this.selectedHeroName = selectedHeroValue.value;
  }

  showHeroImage(): void {
    this.heroService
      .getSuperHeroData(this.selectedHeroName)
      .subscribe((data) => {
        const response = data as HeroResponse;
        this.hero = response.results[0];
        this.imageUrl = this.hero.image.url;
      });
  }
}
