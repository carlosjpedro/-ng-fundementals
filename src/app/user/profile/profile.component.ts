import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit(): void {
    const firstName = new FormControl(
      this.authService.currentUser?.firstName,
      Validators.required);
    const lastName = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required);
    console.log(this.authService.currentUser);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  async cancel() {
    await this.router.navigate(['/events'])
  }

  async save(values: any) {
    this.authService.updateCurrentUser(values);
    await this.router.navigate(['/events']);
  }
}
