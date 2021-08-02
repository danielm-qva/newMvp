import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddProcesoComponent } from "./pages/add-proceso/add-proceso.component";

import { ListProcesoComponent } from "./pages/list-proceso/list-proceso.component";
import { ProvedroPorcesosComponent } from "./pages/provedro-porcesos/provedro-porcesos.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "addproceso", component: AddProcesoComponent },
      { path: "listproceso", component: ListProcesoComponent },
      { path: "provedor_proceso", component: ProvedroPorcesosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MProcesoRoutingModule {}
