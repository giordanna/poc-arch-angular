import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tab3RoutingModule } from "./tab3-routing.module";
import { Tab3Component } from "./tab3.component";

@NgModule({
  declarations: [Tab3Component],
  imports: [CommonModule, Tab3RoutingModule]
})
export class Tab3Module {}
