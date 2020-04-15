import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,])
  });

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: mandar los datos a firebase
    console.log(this.loginForm.value);
    this._router.navigate(['/dashboard']);
  }

}
