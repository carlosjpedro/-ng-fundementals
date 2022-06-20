import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl} from "@angular/forms";
import {EventService} from "../shared";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = false;
  newEvent: any;

  async cancel() {
    console.log('Create event canceled')
    await this.router.navigate(['/events'])
  }

  constructor(private eventService:EventService,  private router: Router) {
  }

  ngOnInit(): void {
  }


  async saveEvent(value: any) {
    console.log(value);
    this.eventService.saveEvent(value);
    await this.router.navigate(['/events'])

  }

  isInvalid(formControl?: AbstractControl): boolean {
    if (!!formControl) {
      return formControl.touched && formControl.invalid;
    }
    return false;
  }

  failsRequired(formControl?: AbstractControl): boolean {
    return this.isInvalid(formControl) && formControl!.errors!['required'];
  }

  failsPattern(formControl?: AbstractControl): boolean {
    return this.isInvalid(formControl) && formControl!.errors!['pattern'];
  }

}
