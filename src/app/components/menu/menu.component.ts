import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @Input() opened = false;
  @Input() routes = [];
  @Output() hasClosed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeMenu() {
    this.hasClosed.emit(false);
  }
}
