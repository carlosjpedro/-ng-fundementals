import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {EventService} from "../shared/event.service";
import {Injectable} from "@angular/core";

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const eventId = +route.params['id'];

    if (this.eventService.getEvent(eventId)) {
      return true;
    }

    await this.router.navigate(['/404'])
    return false;

  }

}
