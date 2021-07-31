import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./pages/add-product/add-product.component";
import { ListProductComponent } from "./pages/list-product/list-product.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "listproduct", component: ListProductComponent },
      { path: "addproduct", component: AddProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MClientRoutingModule {}
