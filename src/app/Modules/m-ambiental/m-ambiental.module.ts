import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MAmbientalRoutingModule } from "./m-ambiental-routing.module";
import { ListGeneralComponent } from "./pages/list-general/list-general.component";
import { PostEmanationResidualesComponent } from "./pages/post-emanation-residuales/post-emanation-residuales.component";
import { PostWastedMaterialsComponent } from "./pages/post-wasted-materials/post-wasted-materials.component";
import { PostWastedProcessComponent } from "./pages/post-wasted-process/post-wasted-process.component";
import { NgxLoadingXModule } from "ngx-loading-x";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ListGeneralComponent,
    PostEmanationResidualesComponent,
    PostWastedMaterialsComponent,
    PostWastedProcessComponent,
  ],
  imports: [
    CommonModule,
    NgxLoadingXModule,
    ReactiveFormsModule,
    FormsModule,
    MAmbientalRoutingModule,
  ],
})
export class MAmbientalModule {}
