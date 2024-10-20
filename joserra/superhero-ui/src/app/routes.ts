import { Routes } from '@angular/router';
import { HeroImageComponent } from './hero/hero-image/hero-image.component';
import HeroDataComponent from './hero/hero-data/hero-data.component';
import { HeroFormComponent } from './hero/hero-form/hero-form.component';
import { FightComponent } from './fight/fight.component';
import { ImagesComponent } from './lazy-loading/images/images.component';
import { HeroCardComponent } from './hero/hero-card/hero-card.component';
import { CardsComponent } from './hero/cards/cards.component';
import { ObservablesComponent } from './hero/observables/observables.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroDataComponent,
  },
  {
    path: 'hero-image',
    component: HeroImageComponent,
  },
  {
    path: 'hero-form',
    component: HeroFormComponent,
  },
  {
    path: 'fight',
    component: FightComponent,
  },
  {
    path: 'lazy-loading',
    component: ImagesComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
];
