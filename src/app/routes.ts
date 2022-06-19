import {Routes} from "@angular/router";
import {EventListComponent} from "./events/event-list/event-list.component";
import {EventDetailComponent} from "./events/event-detail/event-detail.component";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorService} from "./events/event-detail/event-route-activator.service";
import {EventListResolver} from "./events/shared/event-list-resolver.service";
import {userRoutes} from "./user/user.routes";

export const appRoutes: Routes =
  [
    {path: 'events', component: EventListComponent, resolve: {eventList: EventListResolver}},
    {
      path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']
    },
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
    {path: '404', component: Error404Component},
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
  ]
