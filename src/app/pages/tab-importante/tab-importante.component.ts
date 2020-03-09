import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-importante",
  templateUrl: "./tab-importante.component.html",
  styleUrls: ["./tab-importante.component.scss"]
})
export class TabImportanteComponent implements OnInit {
  loading = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
