import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  private URL = environment.URL;

  public header = {
    "Content-Type": "application/json",
  };

  constructor(private _router: Router, private http: HttpClient) {}

  isAutenticar() {
    return true
      ? localStorage.getItem("token") != null &&
          localStorage.getItem("email") != null
      : false;
  }

  Autenticar(email: String, token: String) {
    localStorage["email"] = email;
    localStorage["token"] = token;
    this._router.navigateByUrl("/app/dashboard");
  }

  logout() {
    localStorage.clear();
    this._router.navigateByUrl("/login");
  }

  //get Token
  loggin(data: Object) {
    return this.http.post(this.URL + "users/login", data, {
      headers: this.header,
    });
  }

  //{ "user" : { "email" :user.email , "password" : user.pass}});
  Register_user(data: Object): Observable<any> {
    return this.http.post(this.URL + "users/register", data);
  }
}
