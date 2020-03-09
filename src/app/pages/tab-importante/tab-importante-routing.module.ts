import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabImportanteComponent } from "./tab-importante.component";

const routes: Routes = [{ path: "", component: TabImportanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabImportanteRoutingModule {}
