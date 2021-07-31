import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { FormsComponent } from "./views/base/forms.component";
import { TablesComponent } from "./views/base/tables.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
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
      },
      { path: "from", component: FormsComponent },
      {
        path: "producto",
        loadChildren: () =>
          import("./Modules/m-client/m-client.module").then(
            (m) => m.MClientModule
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
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
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
