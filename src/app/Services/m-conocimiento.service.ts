import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MConocimientoService {
  private URL = environment.URL;

  public header = {
    authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  };

  constructor(public http: HttpClient) {}

  //INOVACION
  //get
  GetInovacion(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + "innovation_projects", {
      headers: this.header,
    });
  }
  //delete
  DeleteInovacion(id: string) {
    return this.http.delete(this.URL + "innovation_projects/" + id, {
      headers: this.header,
    });
  }
  //add
  AddInovacion(data: Object) {
    return this.http.post(this.URL + "innovation_projects", data, {
      headers: this.header,
    });
  }
  GetOneInvacion(id: string) {
    return this.http.get(this.URL + "innovation_projects/" + id, {
      headers: this.header,
    });
  }
  UpdateInvacion(id: string, data: Object) {
    return this.http.put(this.URL + "innovation_projects/" + id, data, {
      headers: this.header,
    });
  }
}
