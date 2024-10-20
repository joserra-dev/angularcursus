import { Component } from '@angular/core';
import {
  HeroInterface,
  HeroResponse,
  HeroService,
} from '../services/hero.service';
import { HeroDetailsComponent } from '../hero/hero-details/hero-details.component';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroDetailsComponent],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss',
})
export class FightComponent {
  selectedFirstHeroName!: string;
  selectedSecondHeroName!: string;
  heroNames!: string[];

  firstHero!: HeroInterface;
  secondHero!: HeroInterface;

  heroWinner!: HeroInterface;

  constructor(private readonly heroService: HeroService) {
    this.heroNames = this.heroService.getHeroesNames();
    this.selectedFirstHeroName = this.heroNames[0];
    this.selectedSecondHeroName = this.heroNames[0];
  }

  setFirstHero($event: Event): void {
    const selectedHeroValue = $event.target as HTMLSelectElement;
    this.selectedFirstHeroName = selectedHeroValue.value;
  }

  setSecondHero($event: Event): void {
    const selectedHeroValue = $event.target as HTMLSelectElement;
    this.selectedSecondHeroName = selectedHeroValue.value;
  }

  fight() {
    this.heroService
      .getSuperHeroData(this.selectedFirstHeroName)
      .subscribe((data) => {
        const response = data as HeroResponse;
        this.firstHero = response.results[0];

        this.heroService
          .getSuperHeroData(this.selectedSecondHeroName)
          .subscribe((data) => {
            const response = data as HeroResponse;
            this.secondHero = response.results[0];

            const firstHeroPower = Number(this.firstHero.powerstats.power);
            const secondHeroPower = Number(this.secondHero.powerstats.power);

            if (firstHeroPower > secondHeroPower) {
              this.heroWinner = this.firstHero;
            } else {
              this.heroWinner = this.secondHero;
            }
          });
      });
  }
}
