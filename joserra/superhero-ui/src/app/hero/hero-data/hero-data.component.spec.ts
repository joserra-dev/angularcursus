import { TestBed } from '@angular/core/testing';

import HeroDataComponent from './hero-data.component';
import { MockProvider, MockRender } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from 'src/app/services/hero.service';
import { of } from 'rxjs';

describe('HeroDataComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroDataComponent, HttpClientTestingModule],
      providers: [
        MockProvider(HeroService, {
          getHeroesNames: () => ['Superman'],
          getSuperHeroData: () => of({}),
        }),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = MockRender(HeroDataComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should set hero', () => {
    const fixture = MockRender(HeroDataComponent);
    const component = fixture.point.componentInstance;
    const event = {
      target: {
        value: 'Superman',
      },
    } as unknown as Event;
    component.setHero(event);
    expect(component.selectedHeroName).toEqual('Superman');
  });

  it('should show hero data', () => {
    const fixture = MockRender(HeroDataComponent);
    const spy = jest.spyOn(
      fixture.point.injector.get(HeroService),
      'getSuperHeroData',
    );
    fixture.point.componentInstance.showHeroData();
    expect(spy).toHaveBeenCalled();
  });
});
