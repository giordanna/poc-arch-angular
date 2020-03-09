import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tab2RoutingModule } from "./tab2-routing.module";
import { Tab2Component } from "./tab2.component";

@NgModule({
  declarations: [Tab2Component],
  imports: [CommonModule, Tab2RoutingModule]
})
export class Tab2Module {}
