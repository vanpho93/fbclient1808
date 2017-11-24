import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SignInService]
})
export class SigninComponent {
  constructor(private signInService: SignInService) {}

  onSignIn(form) {
    this.signInService.sendPost(form.value)
    .then(res => {
      const { name, token } = res;
      localStorage.setItem('name', name);
      localStorage.setItem('token', token);
    })
    .catch(err => console.log(err));
  }
}
