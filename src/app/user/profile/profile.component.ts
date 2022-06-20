import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  firstName!: FormControl<string | undefined | null>;
  lastName!: FormControl<string | undefined | null>;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl<string | undefined | null>(
      this.authService.currentUser?.firstName,
      [Validators.required,
        Validators.pattern(/[aA-zZ].*/)]);
    this.lastName = new FormControl<string | undefined | null>(
      this.authService.currentUser?.lastName,
      Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  async cancel() {
    await this.router.navigate(['/events'])
  }

  async save() {
    if (this.profileForm.valid) {
      const {firstName, lastName} = this.profileForm.value;
      this.authService.updateCurrentUser(firstName, lastName);
      await this.router.navigate(['/events']);
    }
  }
}
