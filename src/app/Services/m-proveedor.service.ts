import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MProveedorService {
  private URL = environment.URL;

  public header = {
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };

  constructor(private _http: HttpClient) {}

  addPorveedor(data: Object) {
    return this._http.post(this.URL + "admin/providers", data, {
      headers: this.header,
    });
  }
  getAllProvider(): Observable<Object[]> {
    return this._http.get<Object[]>(this.URL + "admin/providers", {
      headers: this.header,
    });
  }

  deleteProvider(id: string) {
    return this._http.delete(this.URL + "admin/providers/" + id, {
      headers: this.header,
    });
  }

  getProvider_evalution(): Observable<Object[]> {
    return this._http.get<Object[]>(this.URL + "provider_evaluations", {
      headers: this.header,
    });
  }

  deleteEvaluacion(id: string) {
    return this._http.delete(this.URL + "provider_evaluations/" + id, {
      headers: this.header,
    });
  }
}
