import { Component, OnInit, inject } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

interface HeroImage {
  url: string;
}

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
})
export class ImagesComponent implements OnInit {
  heroService = inject(HeroService);
  nonLazyImage!: string;
  lazyImage!: string;

  ngOnInit(): void {
    this.heroService.getSuperHeroImage('346').subscribe((data) => {
      const { url } = data as HeroImage;
      this.nonLazyImage = url;
    });

    this.heroService.getSuperHeroImage('370').subscribe((data) => {
      const { url } = data as HeroImage;
      this.lazyImage = url;
    });
  }
}
