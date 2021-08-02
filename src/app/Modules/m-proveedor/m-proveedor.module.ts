import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MProveedorRoutingModule } from "./m-proveedor-routing.module";
import { ListProveedorComponent } from "./pages/list-proveedor/list-proveedor.component";
import { AddProveedorComponent } from "./pages/add-proveedor/add-proveedor.component";
import { NgxLoadingXModule } from "ngx-loading-x";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EvaluaProveedorComponent } from './pages/evalua-proveedor/evalua-proveedor.component';

@NgModule({
  declarations: [ListProveedorComponent, AddProveedorComponent, EvaluaProveedorComponent],
  imports: [
    CommonModule,
    MProveedorRoutingModule,
    NgxLoadingXModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MProveedorModule {}
