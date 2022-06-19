import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventModel} from "../models/event.model";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  constructor(private readonly eventService: EventService,
              private readonly route: ActivatedRoute) {
  }

  event!: EventModel;

  ngOnInit(): void {
    const eventId = +this.route.snapshot.params['id'];
    this.eventService.getEvent(eventId).subscribe(next => this.event = next);
  }
}
