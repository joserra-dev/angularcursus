import { Component, Input } from '@angular/core';
import { HeroInterface } from 'src/app/services/hero.service';
import { TransformHeroInfoPipe } from '../../transform-hero-info.pipe';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss',
  imports: [TransformHeroInfoPipe],
})
export class HeroDetailsComponent {
  @Input({ required: true }) hero!: HeroInterface;
}
