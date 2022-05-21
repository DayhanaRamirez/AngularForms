import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/main-layout/main-layout.module").then(
        (m) => m.MainLayoutModule
      ),
  },
];

export const Routing = RouterModule.forRoot(routes);
