import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TabImportanteRoutingModule } from "./tab-importante-routing.module";
import { TabImportanteComponent } from "./tab-importante.component";

@NgModule({
  declarations: [TabImportanteComponent],
  imports: [CommonModule, TabImportanteRoutingModule]
})
export class TabImportanteModule {}
