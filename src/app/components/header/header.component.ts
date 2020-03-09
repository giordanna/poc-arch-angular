import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() opened = false;
  @Input() routes = [];
  @Output() hasOpened = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openMenu() {
    this.hasOpened.emit(!this.opened);
  }
}
