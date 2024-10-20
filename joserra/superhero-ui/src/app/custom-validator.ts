import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function powerLessThanValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const power = control.value;
  if (power > 100) {
    return { powerLessThan: true };
  } else {
    return null;
  }
}
