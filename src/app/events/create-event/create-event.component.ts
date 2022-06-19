import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = false;

  async handleCancel() {
    console.log('Create event canceled')
    await this.router.navigate(['/events'])
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
