import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MClientRoutingModule } from "./m-client-routing.module";
import { AddProductComponent } from "./pages/add-product/add-product.component";
import { ListProductComponent } from "./pages/list-product/list-product.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxLoadingXModule } from "ngx-loading-x";
@NgModule({
  declarations: [AddProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MClientRoutingModule,
    NgxLoadingXModule,
  ],
})
export class MClientModule {}
