import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthCantActiveService {
  constructor(private router: Router, private service: AuthServiceService) {}

  canActivate() {
    if (this.service.isAutenticar()) return true;
    else {
      this.router.navigate([""]);
      return false;
    }
  }
}
