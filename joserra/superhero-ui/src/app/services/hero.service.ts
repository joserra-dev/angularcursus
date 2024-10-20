import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface HeroInterface {
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  image: {
    url: string;
  };
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
}

export interface HeroResponse {
  response: string;
  results: HeroInterface[];
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  currentHero = new BehaviorSubject<HeroInterface | undefined>(undefined);
  private superHeroesNames: string[] = [
    'Ant-Man',
    'Batman',
    'Batman II',
    'Captain America',
    'Catwoman',
    'Daredevil',
    'Deadpool',
    'Flash',
    'Hawkeye',
    'Hulk',
    'Iron Man',
    'Ms Marvel II',
    'Spider-Man',
    'Superman',
    'Wolverine',
  ];

  constructor(private readonly http: HttpClient) {}

  getHeroesNames(): string[] {
    return this.superHeroesNames;
  }

  getSuperHeroData(heroName: string) {
    const url = `api/3713707362288876/search/${heroName}`;
    return this.http.get(url);
  }

  getSuperHeroImage(heroId: string) {
    const url = `api/3713707362288876/${heroId}/image`;
    return this.http.get(url);
  }

  updateHero(hero: HeroInterface): void {
    this.currentHero.next(hero);
  }

  getCurrentHero(): Observable<HeroInterface | undefined> {
    return this.currentHero.asObservable();
  }
}
