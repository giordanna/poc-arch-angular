import { Route, PreloadingStrategy } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
