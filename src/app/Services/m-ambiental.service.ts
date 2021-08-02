import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MAmbientalService {
  private URL = environment.URL;

  public header = {
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };
  constructor(public http: HttpClient) {}

  //Waste Materials

  GetallWasteM(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + "environment/waste_materials", {
      headers: this.header,
    });
  }

  AddWastM(data: Object) {
    return this.http.post(this.URL + "environment/waste_materials", data, {
      headers: this.header,
    });
  }

  DeleteWasteM(id: string) {
    return this.http.delete(this.URL + "environment/waste_materials/" + id, {
      headers: this.header,
    });
  }
  GetByIdWasteM(id: string): Observable<Object> {
    return this.http.get<object>(
      this.URL + "environment/waste_materials/" + id,
      { headers: this.header }
    );
  }
  UpdataATfible(id: string, data: Object) {
    return this.http.put(this.URL + "environment/waste_materials/" + id, data, {
      headers: this.header,
    });
  }

  //waste Process product

  GetallWProcess(): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.URL + "environment/waste_process_products",
      { headers: this.header }
    );
  }

  AddWProcess(data: Object) {
    return this.http.post(
      this.URL + "environment/waste_process_products",
      data,
      { headers: this.header }
    );
  }

  DeleteWProcess(id: string) {
    return this.http.delete(
      this.URL + "environment/waste_process_products/" + id,
      { headers: this.header }
    );
  }
  GetByIWProcess(id: string): Observable<Object> {
    return this.http.get<object>(
      this.URL + "environment/waste_process_products/" + id,
      { headers: this.header }
    );
  }
  UpdataWProcess(id: string, data: Object) {
    return this.http.put(
      this.URL + "environment/waste_process_products/" + id,
      data,
      { headers: this.header }
    );
  }

  // Emanacion y Residuales

  GetallEresiduals(): Observable<Object[]> {
    return this.http.get<Object[]>(
      this.URL + "environment/emanation_residuals",
      { headers: this.header }
    );
  }

  AddEresiduals(data: Object) {
    console.log(data);
    return this.http.post(this.URL + "environment/emanation_residuals", data, {
      headers: this.header,
    });
  }

  DeleteEresiduals(id: string) {
    return this.http.delete(
      this.URL + "environment/emanation_residuals/" + id,
      { headers: this.header }
    );
  }
  GetByIEresiduals(id: string): Observable<Object> {
    return this.http.get<object>(
      this.URL + "environment/emanation_residuals/" + id,
      { headers: this.header }
    );
  }
  UpdataEresiduals(id: string, data: Object) {
    return this.http.put(
      this.URL + "environment/emanation_residuals/" + id,
      data,
      { headers: this.header }
    );
  }
}
