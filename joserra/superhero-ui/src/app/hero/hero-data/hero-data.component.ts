import { Component } from '@angular/core';
import {
  HeroInterface,
  HeroResponse,
  HeroService,
} from 'src/app/services/hero.service';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { SpyDirective } from 'src/app/directives/spy.directive';

@Component({
  selector: 'app-hero-data',
  standalone: true,
  imports: [HeroDetailsComponent, SpyDirective],
  templateUrl: './hero-data.component.html',
  styleUrls: ['./hero-data.component.scss'],
})
export default class HeroDataComponent {
  heroNames!: string[];
  selectedHeroName!: string;
  allHeroVersionsPressed: boolean = false;

  hero!: HeroInterface;
  heroVersions!: HeroInterface[];

  constructor(private readonly heroService: HeroService) {
    this.heroNames = this.heroService.getHeroesNames();
    this.selectedHeroName = this.heroNames[0];
  }

  setHero($event: Event): void {
    const selectedHeroValue = $event.target as HTMLSelectElement;
    this.selectedHeroName = selectedHeroValue.value;
  }

  showHeroData() {
    this.allHeroVersionsPressed = false;
    this.heroService
      .getSuperHeroData(this.selectedHeroName)
      .subscribe((data) => {
        const response = data as HeroResponse;
        this.hero = response.results[0];
        this.heroService.updateHero(this.hero);
      });
  }

  showAllHeroVersions() {
    this.allHeroVersionsPressed = true;
    this.heroService
      .getSuperHeroData(this.selectedHeroName)
      .subscribe((data) => {
        const response = data as HeroResponse;
        this.heroVersions = response.results;
      });
  }
}
