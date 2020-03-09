import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppPreloadingStrategy } from "./strategies/app-preloading-strategy";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
