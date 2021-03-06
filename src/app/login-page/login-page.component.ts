import { Component } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public error: any;

  constructor(public afService: AF, private router: Router) {}

  loginWithGoogle() {
    this.afService.loginWithGoogle().then((result) => {
      // Send them to the homepage if they are logged in
      console.log('loginWithGoogle', result);
      this.afService.saveUserInfoFromForm(result.uid, result.auth.displayName, result.auth.email);
      this.router.navigate(['']);
    })
  }


  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then((result) => {
      this.afService.saveUserInfoFromForm(result.uid, result.auth.displayName, result.auth.email);
      console.log('loginWithEmail', result);

      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}
