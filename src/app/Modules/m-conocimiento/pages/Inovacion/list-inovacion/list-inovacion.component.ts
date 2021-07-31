import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MConocimientoService } from "../../../../../Services/m-conocimiento.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-list-inovacion",
  templateUrl: "./list-inovacion.component.html",
  styleUrls: ["./list-inovacion.component.scss"],
})
export class ListInovacionComponent implements OnInit {
  load: boolean;
  list: Object[] = [];
  constructor(
    private service: MConocimientoService,
    private route: Router,
    public Toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.load = true;
    this.GetAll();
  }

  GetAll() {
    this.service.GetInovacion().subscribe(
      (res: any) => {
        this.list = res.data;
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

  deleteinovacion(id: string) {
    this.load = true;
    this.service.DeleteInovacion(id).subscribe(
      (res) => {
        this.GetAll();
      },
      (error) => {
        setTimeout(() => {
          this.load = false;
        }, 500);
        console.error(error);
      }
    );
  }
}
