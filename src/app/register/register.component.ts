import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthYearCtrl: FormControl;
  passwordForm: FormGroup;


  static passwordMatch(passwordForm: FormGroup) {
    console.log(`Password ${passwordForm.get('password').value} ${passwordForm.get('confirmPassword').value}`);
    return passwordForm.get('password').value !== passwordForm.get('confirmPassword').value ? {
      matchingError: true
    } : null;
  }

  constructor(private fb: FormBuilder) {
    this.loginCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);

    this.passwordCtrl = fb.control('', [Validators.required]);
    this.confirmPasswordCtrl = fb.control('', [Validators.required]);
    this.birthYearCtrl = fb.control('1983', [Validators.required]);

    this.passwordForm = fb.group(
      { password: this.passwordCtrl, confirmPassword: this.confirmPasswordCtrl },
      { validator: RegisterComponent.passwordMatch });




    this.userForm = fb.group({
      login: this.loginCtrl,
      passwordForm: this.passwordForm,
      birthYear: this.birthYearCtrl
    });
  }



  ngOnInit() {

  }

  register() {
    console.log('Form submited ');
    console.log(this.userForm);
  }

}
