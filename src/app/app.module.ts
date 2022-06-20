import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './nav/navbar/navbar.component';
import {appRoutes} from './routes'
import {RouterModule} from "@angular/router";
import {EventsAppComponent} from './events-app.component';
import {Error404Component} from "./errors/404.component";
import {
  CreateEventComponent,
  EventDetailComponent,
  EventListComponent,
  EventListResolver,
  EventRouteActivatorService,
  EventService,
  EventThumbnailComponent
} from "./events";
import {AuthService} from "./user/auth.service";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', useValue:
        (component: CreateEventComponent) => {
          if (component.isDirty)
            return window.confirm('You sure?');
          return true;
        }
    }],
  bootstrap: [EventsAppComponent]
})

export class EventsAppModule {
}
