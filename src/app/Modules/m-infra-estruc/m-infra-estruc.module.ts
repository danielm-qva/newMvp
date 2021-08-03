import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MInfraEstrucRoutingModule } from "./m-infra-estruc-routing.module";
import { ListGeneInfrsEstrucComponent } from "./pages/list-gene-infrs-estruc/list-gene-infrs-estruc.component";
import { NgxLoadingXModule } from "ngx-loading-x";
import { AddUtilesHComponent } from "./pages/add-utiles-h/add-utiles-h.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddProteccionComponent } from "./pages/add-proteccion/add-proteccion.component";
import { AddMetrologiaComponent } from "./pages/add-metrologia/add-metrologia.component";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";
import { AddActivoFTComponent } from './pages/add-activo-ft/add-activo-ft.component';
@NgModule({
  declarations: [
    ListGeneInfrsEstrucComponent,
    AddUtilesHComponent,
    AddProteccionComponent,
    AddMetrologiaComponent,
    AddActivoFTComponent,
  ],
  imports: [
    CommonModule,
    NgxLoadingXModule,
    MInfraEstrucRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
  ],
  providers: [BsModalService],
})
export class MInfraEstrucModule {}
