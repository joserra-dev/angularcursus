import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformHeroInfo',
  standalone: true,
})
export class TransformHeroInfoPipe implements PipeTransform {
  transform(value: string): string {
    return value === '-' ? 'No information available' : value;
  }
}
