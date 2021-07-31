import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../../Services/auth-service.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public fecha: any;

  constructor(public services: AuthServiceService) {}

  ngOnInit(): void {
    this.fecha = new Date().getFullYear();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.services.logout();
  }
}
