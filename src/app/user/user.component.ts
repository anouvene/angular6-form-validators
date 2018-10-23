import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    h3 { color: crimson; } 
    input { text-align: center;  }
  `]
})
export class UserComponent implements OnInit {
  public nom:string;

  public inscriptionForm: FormGroup;
  public firstName: FormControl;
  public email: FormControl;
  public confirmEmail: FormControl;

  constructor() {
    this.firstName = new FormControl('', [this.nameValidator]);
    this.email = new FormControl('');
    this.confirmEmail = new FormControl('');

    this.inscriptionForm = new FormGroup({
      firstname: this.firstName,
      email: this.email,
      confirmemail: this.confirmEmail
    });

  }

  ngOnInit() {
    this.nom = `What is your name ?`;

    this.firstName.setValue('Tuan');
    // this.email = new FormControl('t69120@gmail.com');
    // this.confirmEmail = new FormControl('t69120@gmail.com');

    this.inscriptionForm.setValue({
      firstname: this.firstName.value,
      email: this.email.value,
      confirmemail: this.confirmEmail.value
    });

  }

  static userValidator(form: FormGroup): {[s: string]: boolean} {
    //console.log(form.value);
    const ctrl = form.value.firstname;
    console.log(ctrl);
    if(ctrl === 'Paul') {
      return { matchingUserError: ctrl };
    } else {
      return null;
    }
  }

  public nameValidator(ctrl: FormControl): {[s: string]: boolean} {
    console.log(ctrl.value);
    if(ctrl.value === 'Paul') {
      console.log('OK');
      return { matchingNameError: true };
    } else {
      return null;
    }
  }

  register() {
    console.log('Inscription: ', this.inscriptionForm.value);
  }



}
