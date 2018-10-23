import {FormControl, FormGroup, Validators} from "@angular/forms";

export class FormValidatorModel {
  public emailGroup: FormGroup;
  public passwordGroup: FormGroup;
  public registerGroup: FormGroup;

  constructor() {}

  /**
   * Create register form function
   */
  public createForm(): void {
    // Init Email FormGroup
    this.emailGroup = new FormGroup(
      // FormControl
      {
        email: new FormControl('', [Validators.required, this.emailControlValidator]),
        confirmEmail: new FormControl('', [Validators.required, this.emailControlValidator])
      },
      // Validator
      this.emailGroupValidator
    );

    // Init Password FormGroup
    this.passwordGroup = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', [Validators.required])
      },
      this.passwordGroupValidator
    );

    // Init Register FormGroup
    this.registerGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      emailGroup: this.emailGroup,
      passwordGroup: this.passwordGroup
    })
  }

  /**
   * FormControl email address syntax validator
   * @param control Email FormControl
   * @returns {{emailError: boolean}} Email error object
   */
  private emailControlValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value && !control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      console.log('Email error');
      return {emailError: true};
    }
  }

  /**
   * FormGroup email validator which compares email value with confirm email value
   * @param group
   * @returns {{emailGroupError: boolean}}
   */
  private emailGroupValidator(group: FormGroup): {[s: string]: boolean} {
    return (group.get('email').value !== group.get('confirmEmail').value) ? {emailGroupError: true} : null;
  }

  /**
   * FormGroup password validator which compares password value with confirm paswword value
   * @param group
   * @returns {{passwordGroupError: boolean}}
   */
  private passwordGroupValidator(group: FormGroup): {[s: string]: boolean} {
    return (group.get('password').value !== group.get('confirmPassword').value) ? {passwordGroupError: true} : null;
  }

  /**
   * Reset form
   */
  public reinitialiser() {
    this.registerGroup.reset()
  }
}


