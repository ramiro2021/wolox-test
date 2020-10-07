import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
        .subscribe(resp => {

          if (this.loginForm.get('check').value) {
            localStorage.setItem('email', this.loginForm.get('email').value);

          } else {
            localStorage.removeItem('email');

          }

          console.log(resp);
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
