import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {EventModel} from "../models/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event!: EventModel;

  public get startTimeCssClass() {
    const earlyStart = this.event.time === "8:00 am";
    return {
      green: earlyStart,
      bold: earlyStart,
    };
  }
}
