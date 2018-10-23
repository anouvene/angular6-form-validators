import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  FormControl,
  ValidatorFn,
  Validator,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = this.emailValidator();
  }

  /**
   * Validator interface method
   * @param control
   * @returns {ValidationErrors|null}
   */
  validate(control: AbstractControl): ValidationErrors | any {
    return this.validator(control);
  }

  /**
   * Method will decide if the validation has passed or not
   * @returns {(c:FormControl)=>(null|{emailvalidator: {valid: boolean}})}
   */
  emailValidator(): ValidatorFn {
    return (control: FormControl) => {
      let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
      if (isValid) {
        return null;
      } else {
        return {
          emailvalidator: {
            valid: false
          }
        };
      }
    }
  }

}
