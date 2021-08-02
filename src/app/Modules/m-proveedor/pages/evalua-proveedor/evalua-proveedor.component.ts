import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MProveedorService } from "../../../../Services/m-proveedor.service";

@Component({
  selector: "app-evalua-proveedor",
  templateUrl: "./evalua-proveedor.component.html",
  styleUrls: ["./evalua-proveedor.component.scss"],
})
export class EvaluaProveedorComponent implements OnInit {
  load: boolean;
  elemt: any;
  constructor(public service: MProveedorService, public Toast: ToastrService) {}

  ngOnInit(): void {
    this.load = true;
    this.getall();
  }

  getall() {
    this.service.getProvider_evalution().subscribe(
      (res: any) => {
        this.elemt = res.data;
        console.log(this.elemt);
        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (erro) => {
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.Toast.error("Operacion no realizada", "Boot Mvp", {
          timeOut: 1500,
        });
      }
    );
  }

  delete(id: string) {
    this.load = true;
    this.service.deleteEvaluacion(id).subscribe(
      (res) => {
        this.Toast.success("Operacion exitosa", "Boot Mvp", {
          timeOut: 1500,
        });
        this.getall();
      },
      (error) => {
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.Toast.error("Operacion fallida....", "Boot Mvp", {
          timeOut: 800,
        });
      }
    );
  }
}
