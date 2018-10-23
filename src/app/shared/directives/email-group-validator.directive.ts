import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  ValidatorFn,
  Validator,
  ValidationErrors,
  AbstractControl,
  FormGroup,
  FormControl
} from '@angular/forms';

@Directive({
  selector: '[appEmailGroupValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, // Token
      useExisting: EmailGroupValidatorDirective,
      multi: true
    }
  ]
})
export class EmailGroupValidatorDirective implements Validator {

  groupValidator: ValidatorFn;

  constructor() {
    this.groupValidator = this.emailGroupValidator();
  }

  /**
   * Validator interface method
   * @param AbstractControl
   * @returns {ValidationErrors|null}
   */
  validate(group: AbstractControl): ValidationErrors | any {
    return this.groupValidator(group);
  }

  emailGroupValidator(): ValidatorFn {

    let emailControl: FormControl;
    let confirmEmailControl: FormControl;

    return (group: FormGroup) => {
      if (!group) {
        return null;
      }

      emailControl = group.get('email') as FormControl;
      confirmEmailControl = group.get('confirmEmail') as FormControl;

      // If controls emailControl & confirmEmailControl are not null
      if(emailControl !== null && confirmEmailControl !== null) {
        if(emailControl.value !== null && confirmEmailControl.value !== null) {

          let isEmailValid = null;
          let isEmailConfirmValid = null;

          // Email syntaxe error
          if(emailControl.errors) {
            isEmailValid = emailControl.errors.emailvalidator.valid;
          }

          // Confirmation email syntaxe
          if(confirmEmailControl.errors) {
            isEmailConfirmValid = confirmEmailControl.errors.emailvalidator.valid;
          }

          console.log('isEmailValid: ', isEmailValid);
          console.log('isEmaiConfirmlValid: ', isEmailConfirmValid);


          // Validation email ok
          let isConfirmValid = emailControl.value.toLocaleLowerCase() === confirmEmailControl.value.toLocaleLowerCase()
          && isEmailValid == null && isEmailConfirmValid == null;

          console.log('isConfirmValid: ', isConfirmValid);

          if(isConfirmValid) {
            return null;
          } else {
            return {emailGroupError: true};
          }
        }
      }

    };
  }



}
