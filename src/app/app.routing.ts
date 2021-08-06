import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { AuthCantActiveService } from "./Services/auth-cant-active.service";
import { FormsComponent } from "./views/base/forms.component";
import { TablesComponent } from "./views/base/tables.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { ModalsComponent } from "./views/notifications/modals.component";
import { RegisterComponent } from "./views/register/register.component";

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "app",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthCantActiveService],
      },
      { path: "from", component: FormsComponent },

      {
        path: "producto",
        loadChildren: () =>
          import("./Modules/m-client/m-client.module").then(
            (m) => m.MClientModule
          ),
        canActivate: [AuthCantActiveService],
      },
      {
        path: "inovacion",
        loadChildren: () =>
          import("./Modules/m-conocimiento/m-conocimiento.module").then(
            (m) => m.MConocimientoModule
          ),
        canActivate: [AuthCantActiveService],
      },
      {
        path: "proveedor",
        loadChildren: () =>
          import("./Modules/m-proveedor/m-proveedor.module").then(
            (m) => m.MProveedorModule
          ),
        canActivate: [AuthCantActiveService],
      },
      {
        path: "porcess",
        loadChildren: () =>
          import("./Modules/m-proceso/m-proceso.module").then(
            (m) => m.MProcesoModule
          ),
        canActivate: [AuthCantActiveService],
      },
      {
        path: "ambiental",
        loadChildren: () =>
          import("./Modules/m-ambiental/m-ambiental.module").then(
            (m) => m.MAmbientalModule
          ),
        canActivate: [AuthCantActiveService],
      },
      {
        path: "infraEstruc",
        loadChildren: () =>
          import("./Modules/m-infra-estruc/m-infra-estruc.module").then(
            (m) => m.MInfraEstrucModule
          ),
      },
    ],
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },

  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
