import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MProcesoRoutingModule } from "./m-proceso-routing.module";
import { AddProcesoComponent } from "./pages/add-proceso/add-proceso.component";
import { ListProcesoComponent } from "./pages/list-proceso/list-proceso.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxLoadingXModule } from "ngx-loading-x";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";
import { ProvedroPorcesosComponent } from "./pages/provedro-porcesos/provedro-porcesos.component";

@NgModule({
  declarations: [
    AddProcesoComponent,
    ListProcesoComponent,
    ProvedroPorcesosComponent,
  ],
  imports: [
    CommonModule,
    MProcesoRoutingModule,
    ReactiveFormsModule,
    ModalModule,

    FormsModule,
    NgxLoadingXModule,
  ],
  providers: [BsModalService],
})
export class MProcesoModule {}
