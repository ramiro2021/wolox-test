import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      check: [false]
    });
  }

  loginUser(): void {
    try {

      if (this.loginForm.invalid) {
        return;
      }

      this.authService.login(this.loginForm.value)
        .subscribe((resp: any) => {

          // si desea recordarlo guardo el token en local storage
          if (this.loginForm.get('check').value) {
            localStorage.setItem('token', resp.token);
            this.router.navigate(['/list-tech']);
          } else {
            // sino, remuevo lo que haya en local storage y seteo una variable temporal
            // que se borra en la navbar
            localStorage.removeItem('check');
            localStorage.setItem('temporalSession', 'temporalSession');
            this.router.navigate(['/list-tech']);
          }

        },
          (err) => console.warn(err)
        );

    } catch (error) {
      return error.message;
    }
  }

  get emailInvalid(): boolean {
    return this.loginForm.get('email').invalid &&
      this.loginForm.get('email').touched;
  }

  get passwordInvalid(): boolean {
    return this.loginForm.get('password').invalid &&
      this.loginForm.get('password').touched;
  }


}
