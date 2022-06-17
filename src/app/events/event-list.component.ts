import {Component} from "@angular/core";
import {EventModel} from "./models/event.model"

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html'
})
export class EventListComponent {
  event: EventModel = {
    id: 1,
    name: 'Angular Connect',
    date: '26/09/2036',
    time: '10:00am',
    price: '599,99',
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }


  }
}
