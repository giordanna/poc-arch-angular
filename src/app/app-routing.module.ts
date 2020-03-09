import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppPreloadingStrategy } from "./strategies/app-preloading-strategy";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule),
    data: { title: "Home", preload: true }
  },
  {
    path: "tab-importante",
    loadChildren: () =>
      import("./pages/tab-importante/tab-importante.module").then(
        m => m.TabImportanteModule
      ),
    data: { title: "Tab importante", preload: true }
  },
  {
    path: "tab2",
    loadChildren: () =>
      import("./pages/tab2/tab2.module").then(m => m.Tab2Module),
    data: { title: "Tab 2" }
  },
  {
    path: "tab3",
    loadChildren: () =>
      import("./pages/tab3/tab3.module").then(m => m.Tab3Module),
    data: { title: "Tab 3" }
  },
  {
    path: "404",
    loadChildren: () =>
      import("./pages/not-found/not-found.module").then(m => m.NotFoundModule),
    data: { title: "Ops! Página não encontrada" }
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
