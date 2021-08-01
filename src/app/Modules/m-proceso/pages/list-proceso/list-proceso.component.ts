import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MProcesoService } from "../../../../Services/m-proceso.service";

@Component({
  selector: "app-list-proceso",
  templateUrl: "./list-proceso.component.html",
  styleUrls: ["./list-proceso.component.scss"],
})
export class ListProcesoComponent implements OnInit {
  load: boolean;
  listProvedor: Object[] = [];
  pages: number = 1;
  list: Object[] = [];
  activa: boolean = true;

  constructor(
    private service: MProcesoService,
    private _route: Router,
    private toast: ToastrService // private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.load = true;
    this.getAllProcess();
  }

  getAllProcess() {
    this.service.getAllProcess().subscribe(
      (res: any) => {
        this.list = res.data;
        this.toast.success("Operacion Realizada con exito", "Boots MVP", {
          timeOut: 2000,
        });

        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (error) => {
        this.toast.error("Ha ocurrido un error...", "Boots MVP", {
          timeOut: 1500,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this._route.navigate(["/app/dashboard"]);
      }
    );
  }

  delete_id(id: string) {
    this.load = true;
    this.service.deleteProcess(id).subscribe(
      (res) => {
        this.toast.success("Operacion Realizada con exito", "Boots MVP", {
          timeOut: 2000,
        });
        this.getAllProcess();
      },
      (error) => {
        this.toast.error("Ha ocurrido un error...", "Boots MVP", {
          timeOut: 1500,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this._route.navigate(["/app/dashboard"]);
      }
    );
  }
}
