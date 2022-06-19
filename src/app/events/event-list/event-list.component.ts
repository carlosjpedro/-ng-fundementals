import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {EventModel} from "../models/event.model";
import {ActivatedRoute} from "@angular/router";

declare let toastr: any;

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventList!: EventModel[];

  constructor(
    private readonly eventService: EventService,
    private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventList = this.route.snapshot.data['eventList'];
  }

  handleClick(ev: EventModel) {
    console.log('Event Selected', ev);
  }
}
