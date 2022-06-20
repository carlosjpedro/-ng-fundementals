import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  mouseoverLogin: boolean = false;


  constructor(private readonly authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async login({formValues}: { formValues: any }) {
    console.log(`${this.userName} ${this.password}`, formValues);
    this.authService.loginUser(formValues['userName'], formValues['password'])
    await this.router.navigate(['/events'])
  }

  async cancel() {
    await this.router.navigate(['/events'])
  }
}
