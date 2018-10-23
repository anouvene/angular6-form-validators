import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-bis',
  templateUrl: './register-bis.component.html',
  styleUrls: ['./register-bis.component.css']
})
export class RegisterBisComponent implements OnInit {

  public emailGroup: FormGroup;
  public passwordGroup: FormGroup;
  public registerGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm(); // Invoke create register form function
  }

  ngOnInit() {}

  /**
   * Create register form function
   */
  public createForm(): void {
    // Init Email FormGroup
    this.emailGroup = this.fb.group(
      // FormControl
      {
        email: this.fb.control('', [Validators.required, this.emailControlValidator]),
        confirmEmail: this.fb.control('', [Validators.required, this.emailControlValidator])
      },
      // Validator
      { validator: RegisterBisComponent.emailGroupValidator }
    );

    // Init Password FormGroup
    this.passwordGroup = this.fb.group(
      {
        password: this.fb.control('', Validators.required),
        confirmPassword: this.fb.control('', [Validators.required])
      },
      { validator: this.passwordGroupValidator }
    );

    // Init Register FormGroup
    this.registerGroup = this.fb.group({
      name: this.fb.control('', Validators.required),
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
  static emailGroupValidator(group: FormGroup): {[s: string]: boolean} {
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
