import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MProveedorService } from "../../../../Services/m-proveedor.service";

@Component({
  selector: "app-list-proveedor",
  templateUrl: "./list-proveedor.component.html",
  styleUrls: ["./list-proveedor.component.scss"],
})
export class ListProveedorComponent implements OnInit {
  load: Boolean;

  listProvedor: Object[] = [];
  constructor(
    public service: MProveedorService,
    private Toast: ToastrService,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.load = true;
    this.GetAll();
  }

  GetAll() {
    this.service.getAllProvider().subscribe(
      (res: any) => {
        this.listProvedor = res.data;
        this.Toast.success("Operacion Realizada con exito", "Boots MVP", {
          timeOut: 2000,
        });
        console.log(res.data);
        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (error) => {
        this.Toast.error("Ha ocurrido un error...", "Boots MVP", {
          timeOut: 1500,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.route.navigate(["/app/dashboard"]);
      }
    );
  }

  delete(id: string) {
    this.load = true;
    this.service.deleteProvider(id).subscribe(
      (res) => {
        this.Toast.success("Operacion Realizada con exito", "Boots MVP", {
          timeOut: 2000,
        });
        this.GetAll();
      },
      (error) => {
        this.Toast.error("Ha ocurrido un error...", "Boots MVP", {
          timeOut: 1500,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.route.navigate(["/app/dashboard"]);
      }
    );
  }
}
