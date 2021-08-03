import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddActivoFTComponent } from "./pages/add-activo-ft/add-activo-ft.component";
import { AddMetrologiaComponent } from "./pages/add-metrologia/add-metrologia.component";
import { AddProteccionComponent } from "./pages/add-proteccion/add-proteccion.component";
import { AddUtilesHComponent } from "./pages/add-utiles-h/add-utiles-h.component";
import { ListGeneInfrsEstrucComponent } from "./pages/list-gene-infrs-estruc/list-gene-infrs-estruc.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "listGenInfraEstruc",
        component: ListGeneInfrsEstrucComponent,
      },
      { path: "addUtilesH", component: AddUtilesHComponent },
      { path: "addProteccion", component: AddProteccionComponent },
      {
        path: "addMetrologia",
        component: AddMetrologiaComponent,
      },
      {
        path: "addActivoFT",
        component: AddActivoFTComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MInfraEstrucRoutingModule {}
