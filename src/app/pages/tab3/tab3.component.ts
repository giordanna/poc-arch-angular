import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.component.html",
  styleUrls: ["./tab3.component.scss"]
})
export class Tab3Component implements OnInit {
  loading = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
