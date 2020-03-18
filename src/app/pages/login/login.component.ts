import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm = this.fb.group({
    email: ['usuario.1@gmail.com', Validators.required],
    password: ['123456', [Validators.required, Validators.minLength(3)]],
  });
  formPending: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    this.formPending = true;

    this.apiService.login(this.userLoginForm.controls.email.value, this.userLoginForm.controls.password.value)
      .then(loginRes => {
        const res: any = loginRes;

        if (res.operationType === 'signIn') {
          this.router.navigate(['schedule']);
        } else {
          console.log(res);
        }
      })
      .catch(loginError => {
        console.log(loginError);
      })
      .finally(() => {this.formPending = false; }
    );
  }
}
