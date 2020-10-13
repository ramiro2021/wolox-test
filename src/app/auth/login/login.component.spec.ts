import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule, RouterTestingModule],
      providers: [AuthService]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });


  it('should create form (email password and check)', () => {

    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
    expect(component.loginForm.contains('check')).toBeTruthy();
  });


  it('Validations mail and password required', () => {

    const controlEmail = component.loginForm.get('email');
    const controlPassword = component.loginForm.get('password');

    controlEmail.setValue('');
    controlPassword.setValue('');

    expect(controlEmail.valid).toBeFalsy();
    expect(controlPassword.valid).toBeFalsy();

  });

  it('Validations password length >= 4', () => {

    const controlPassword = component.loginForm.get('password');

    controlPassword.setValue('123');
    expect(controlPassword.valid).toBeFalsy();

    controlPassword.setValue('1234');
    expect(controlPassword.valid).toBeTruthy();

    controlPassword.setValue('12345');
    expect(controlPassword.valid).toBeTruthy();

  });

  it('Validations email = email format', () => {

    const controlEmail = component.loginForm.get('email');

    controlEmail.setValue('asdasd');

    expect(controlEmail.valid).toBeFalsy();

    controlEmail.setValue('ramiro@gmail.com');

    expect(controlEmail.valid).toBeTruthy();

  });


});
