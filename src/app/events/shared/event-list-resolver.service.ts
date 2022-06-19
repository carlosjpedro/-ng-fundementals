import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EventService} from "./event.service";
import {Observable} from "rxjs";
import {EventModel} from "../models/event.model";

@Injectable()
export class EventListResolver implements Resolve<EventModel[]> {

  constructor(private readonly eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventModel[]> | Promise<EventModel[]> | EventModel[] {
    return this.eventService.getEvents().pipe(evList => evList)
  }
}



