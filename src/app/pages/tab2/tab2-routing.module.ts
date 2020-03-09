import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab2Component } from "./tab2.component";

const routes: Routes = [{ path: "", component: Tab2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2RoutingModule {}
