import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.login('usuario.1@gmail.com', '123456')
      .then(loginRes => {

        this.router.navigate(['schedule']);
      })
      .catch(loginError => {
        console.log(loginError);
      });
  }

}
