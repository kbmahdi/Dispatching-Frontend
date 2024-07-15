import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/demo/service/user.service';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .p-password input {
      width: 100%;
      padding:1rem;
    }

    :host ::ng-deep .pi-eye {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
  email: string = '';
  password: string = '';
  rememberMe: boolean = false; // Add a property for the "Remember Me" checkbox
  errorMessage: string = '';


  constructor(private userService: UserService, public layoutService: LayoutService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.login(this.email, this.password).subscribe(
        response => {
          console.log('Login successful');
          this.errorMessage = '';
          if (this.rememberMe) {
            localStorage.setItem('access_token', response.access_token);
          } else {
            sessionStorage.setItem('access_token', response.access_token);
          }
          this.router.navigateByUrl('/pages/etatStock');
        },
        error => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        }
      );
    }
  }
}
