import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { powerLessThanValidator } from '../../custom-validator';

interface HeroForm {
  name: FormControl<string>;
  realName: FormControl<string>;
  power: FormControl<number | undefined>;
}

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent {
  heroForm = new FormGroup<HeroForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    realName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    power: new FormControl(undefined, {
      nonNullable: true,
      validators: [Validators.required, powerLessThanValidator],
    }),
  });

  saveHero(): void {
    const hero = this.heroForm.getRawValue();
    const msg = `Has registrado un hero con nombre ${hero.name} y su poder es ${hero.power}`;
    alert(msg);
  }

  clearForm(): void {
    this.heroForm.reset();
  }
}
