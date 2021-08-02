import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MProcesoService {
  constructor(private _http: HttpClient) {}

  private URL = environment.URL;

  public header = {
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };

  getAllProcess(): Observable<Object[]> {
    return this._http.get<Object[]>(this.URL + "processes", {
      headers: this.header,
    });
  }

  getAddProcess(data: Object) {
    return this._http.post(this.URL + "processes", data, {
      headers: this.header,
    });
  }

  deleteProcess(id: string) {
    return this._http.delete(this.URL + "processes/" + id, {
      headers: this.header,
    });
  }

  AddProvider_Process(data: Object) {
    return this._http.post(this.URL + "processes/add_provider", data, {
      headers: this.header,
    });
  }

  AddEvalution_Provider(data: Object) {
    return this._http.post(
      this.URL + "provider_evaluations",
      { provider_evaluation: data },
      { headers: this.header }
    );
  }

  getProvedor_Process(id: string): Observable<Object[]> {
    return this._http.get<Object[]>(
      this.URL + "processes/" + id + "/providers",
      { headers: this.header }
    );
  }
}
