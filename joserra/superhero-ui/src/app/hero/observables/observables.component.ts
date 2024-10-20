import { Component, inject } from '@angular/core';
import { HeroInterface, HeroService } from '../../services/hero.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent {
  heroService = inject(HeroService);
  currentHero!: HeroInterface | undefined;

  constructor() {
    this.heroService
      .getCurrentHero()
      .pipe(takeUntilDestroyed())
      .subscribe((hero) => {
        this.currentHero = hero;
      });
  }
}
