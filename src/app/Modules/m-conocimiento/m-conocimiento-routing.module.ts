import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddInovacionComponent } from "./pages/Inovacion/add-inovacion/add-inovacion.component";
import { ListInovacionComponent } from "./pages/Inovacion/list-inovacion/list-inovacion.component";
import { UpdateInovacionComponent } from "./pages/Inovacion/update-inovacion/update-inovacion.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "listInovacion", component: ListInovacionComponent },
      { path: "addInovacion", component: AddInovacionComponent },
      { path: "updateInovacion", component: UpdateInovacionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MConocimientoRoutingModule {}
