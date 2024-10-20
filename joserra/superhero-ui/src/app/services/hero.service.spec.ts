import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(HeroService);
    expect(service).toBeTruthy();
  });

  it('should get heroes names', () => {
    const service = TestBed.inject(HeroService);
    const heroesNames = service.getHeroesNames();
    expect(heroesNames.length).toBeGreaterThan(0);
  });

  it('should get super hero data', async () => {
    const service = TestBed.inject(HeroService);
    const heroName = 'Superman';
    service.getSuperHeroData(heroName).subscribe((data) => {
      expect(data).toBeTruthy();
    });
  });
});
