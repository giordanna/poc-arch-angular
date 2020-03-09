import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  project = "POC Arch Project";
  opened = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route["firstChild"]) route = route["firstChild"];
          return route;
        }),
        filter(route => route["outlet"] === "primary"),
        mergeMap(route => route["data"])
      )
      .subscribe(event =>
        this.titleService.setTitle(event["title"] + " | " + this.project)
      );
  }

  get filteredRouter() {
    return this.router.config.filter(url => !["404", "**"].includes(url.path));
  }

  openOrClose(ev) {
    this.opened = ev;
  }
}
