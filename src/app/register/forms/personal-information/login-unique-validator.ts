import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbidEqualLogin(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value);
    return { "forbiddenValue": true };
  };
}
