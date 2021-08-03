import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MInfraestructuraService {
  private URL = environment.URL;

  constructor(public http: HttpClient) {}

  public header = {
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };

  //Activo Fijo Tangible

  getAll(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + "admin/tangible_fixed_assets", {
      headers: this.header,
    });
  }

  AddAFtangible(data: Object) {
    return this.http.post(this.URL + "admin/tangible_fixed_assets", data, {
      headers: this.header,
    });
  }

  DeleteAFtangible(id: string) {
    return this.http.delete(this.URL + "admin/tangible_fixed_assets/" + id, {
      headers: this.header,
    });
  }
  getByIdATF(id: string): Observable<Object> {
    return this.http.get<object>(
      this.URL + "admin/tangible_fixed_assets/" + id,
      { headers: this.header }
    );
  }
  UpdataATfible(id: string, data: Object) {
    return this.http.put(this.URL + "admin/tangible_fixed_assets/" + id, data, {
      headers: this.header,
    });
  }

  //Utiles y herramientas

  getAllUH(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + "infrastructure/utils_tools", {
      headers: this.header,
    });
  }
  AddUtilsTools(data: Object) {
    return this.http.post(this.URL + "infrastructure/utils_tools", data, {
      headers: this.header,
    });
  }

  DeleteUtilsTools(id: string) {
    return this.http.delete(this.URL + "infrastructure/utils_tools/" + id, {
      headers: this.header,
    });
  }
  getbyId(id: string): Observable<Object> {
    return this.http.get<Object>(
      this.URL + "infrastructure/utils_tools/" + id,
      { headers: this.header }
    );
  }
  UpdateUtileTools(id: string, data: Object) {
    return this.http.put(this.URL + "infrastructure/utils_tools/" + id, data, {
      headers: this.header,
    });
  }

  //Metrologia

  getAllMetrologia(): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.URL + "infrastructure/metrology/control_points",
      { headers: this.header }
    );
  }
  addMetrologia(data: Object) {
    return this.http.post(
      this.URL + "infrastructure/metrology/control_points",
      data,
      { headers: this.header }
    );
  }
  DeleteMetrologia(id: string) {
    return this.http.delete(
      this.URL + "infrastructure/metrology/control_points/" + id,
      { headers: this.header }
    );
  }
  getByIdMetrologi(id: string) {
    return this.http.get(
      this.URL + "infrastructure/metrology/control_points/" + id,
      { headers: this.header }
    );
  }
  updateMetrologia(id: string, data: object) {
    return this.http.put(
      this.URL + "infrastructure/metrology/control_points/" + id,
      data,
      { headers: this.header }
    );
  }

  //Proteccion Process
  getAllProteccion(): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.URL + "infrastructure/protection_actions",
      { headers: this.header }
    );
  }
  addProteccion(data: Object) {
    return this.http.post(
      this.URL + "infrastructure/protection_actions",
      data,
      { headers: this.header }
    );
  }
  DeleteProteccion(id: string) {
    return this.http.delete(
      this.URL + "infrastructure/protection_actions/" + id,
      { headers: this.header }
    );
  }

  getByIdProteccion(id: string): Observable<Object> {
    return this.http.get<Object>(
      this.URL + "infrastructure/protection_actions/" + id,
      { headers: this.header }
    );
  }

  updateProteccion(id: string, data: Object) {
    return this.http.put(
      this.URL + "infrastructure/protection_actions/" + id,
      data,
      { headers: this.header }
    );
  }
}
