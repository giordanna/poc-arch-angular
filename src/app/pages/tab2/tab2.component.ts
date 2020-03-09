import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.component.html",
  styleUrls: ["./tab2.component.scss"]
})
export class Tab2Component implements OnInit {
  loading = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
