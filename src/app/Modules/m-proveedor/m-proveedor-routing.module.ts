import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProveedorComponent } from "./pages/add-proveedor/add-proveedor.component";
import { EvaluaProveedorComponent } from "./pages/evalua-proveedor/evalua-proveedor.component";
import { ListProveedorComponent } from "./pages/list-proveedor/list-proveedor.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "listproveedor", component: ListProveedorComponent },
      { path: "addproveedor", component: AddProveedorComponent },
      { path: "evaluproveedor", component: EvaluaProveedorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MProveedorRoutingModule {}
