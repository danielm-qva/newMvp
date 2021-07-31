import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MClienteService {
  private URL = environment.URL;

  public header = {
    //localStorage.getItem('token'),
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };

  constructor(private http: HttpClient) {}

  getAllPorducts(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + "products", {
      headers: this.header,
    });
  }

  createProduct(data: Object) {
    console.log(data);
    return this.http.post(this.URL + "products", data, {
      headers: this.header,
    });
  }

  getoneProduct(id: string) {
    let url = `${this.URL}products/${id}`;
    return this.http.get(url, { headers: this.header });
  }

  deleteProducto(id: string) {
    let url = `${this.URL}products/${id}`;
    return this.http.delete(url, { headers: this.header });
  }
}
