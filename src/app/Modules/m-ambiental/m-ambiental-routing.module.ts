import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListGeneralComponent } from "./pages/list-general/list-general.component";
import { PostEmanationResidualesComponent } from "./pages/post-emanation-residuales/post-emanation-residuales.component";
import { PostWastedMaterialsComponent } from "./pages/post-wasted-materials/post-wasted-materials.component";
import { PostWastedProcessComponent } from "./pages/post-wasted-process/post-wasted-process.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "listgeneral", component: ListGeneralComponent },
      {
        path: "postemanationresiduals",
        component: PostEmanationResidualesComponent,
      },
      { path: "postwastedmaterials", component: PostWastedMaterialsComponent },
      { path: "postwastedprocess", component: PostWastedProcessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MAmbientalRoutingModule {}
