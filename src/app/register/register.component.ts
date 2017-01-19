import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  birthYearCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    this.loginCtrl = fb.control('');
    this.passwordCtrl = fb.control('');
    this.birthYearCtrl = fb.control('1983');

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
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
