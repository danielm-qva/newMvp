import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { MInfraestructuraService } from "../../../../Services/m-infraestructura.service";

@Component({
  selector: "app-list-gene-infrs-estruc",
  templateUrl: "./list-gene-infrs-estruc.component.html",
  styleUrls: ["./list-gene-infrs-estruc.component.scss"],
})
export class ListGeneInfrsEstrucComponent implements OnInit {
  load: boolean;
  listElemtos: any;
  listProtecc: any;
  listmtrologia: any;
  listActivoFijo: any;
  detalles: any[] = [];
  constructor(
    public service: MInfraestructuraService,
    public toaat: ToastrService,
    public Modal: BsModalService
  ) {}

  ngOnInit(): void {
    this.fillall();
  }

  fillall() {
    this.load = true;
    this.service.getAllUH().subscribe(
      (res: any) => {
        console.log(res.data);
        this.listElemtos = res.data;
      },
      (erro) => {
        console.log(erro);
        setTimeout(() => {
          this.load = false;
        }, 800);
      }
    );

    this.service.getAllProteccion().subscribe(
      (res: any) => {
        this.listProtecc = res.data;
      },
      (error) => {
        console.log(error);
        setTimeout(() => {
          this.load = false;
        }, 800);
      }
    );

    this.service.getAllMetrologia().subscribe(
      (res: any) => {
        this.listmtrologia = res.data;
      },
      (error) => {
        console.log(error);
        setTimeout(() => {
          this.load = false;
        }, 800);
      }
    );

    this.service.getAll().subscribe(
      (res: any) => {
        console.log(res.data);
        this.listActivoFijo = res.data;
        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (error) => {
        console.log(error);
        this.load = false;
      }
    );
  }

  deleteUHerramiennta(id: string) {
    this.load = true;
    this.service.DeleteUtilsTools(id).subscribe(
      (res) => {
        this.toaat.success("Operacion realizada con exito..", "Boot MvP", {
          timeOut: 1200,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.fillall();
      },
      (error) => {
        this.toaat.error("Operacion realizada no exito..", "Boot MvP", {
          timeOut: 1200,
        });
      }
    );
  }

  deleteProteccion(id: string) {
    this.load = true;
    this.service.DeleteProteccion(id).subscribe(
      (res) => {
        this.toaat.success("Operacion realizada con exito..", "Boot MvP", {
          timeOut: 1200,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.fillall();
      },
      (error) => {
        this.toaat.error("Operacion realizada no exito..", "Boot MvP", {
          timeOut: 1200,
        });
      }
    );
  }

  deleteMetrologia(id: string) {
    this.load = true;
    this.service.DeleteMetrologia(id).subscribe(
      (res) => {
        this.toaat.success("Operacion realizada con exito..", "Boot MvP", {
          timeOut: 1200,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.fillall();
      },
      (error) => {
        this.toaat.error("Operacion realizada no exito..", "Boot MvP", {
          timeOut: 1200,
        });
      }
    );
  }

  async detalles_Metrologia(id: string, longContent) {
    this.load = true;
    await this.service.getByIdMetrologi(id).subscribe((res: any) => {
      console.log(res);
      this.detalles.push(res.data);
    });
    setTimeout(() => {
      this.load = false;
    }, 1000);
    this.Modal.show(longContent);
    this.detalles = [];
  }
  cerraModal() {
    this.Modal.hide();
  }

  deleteAFtangible(id: string) {
    this.service.DeleteAFtangible(id).subscribe(
      (res) => {
        this.toaat.success("Operacion realizada con exito..", "Boot MVP");
        this.load = true;
        this.fillall();
      },
      (error) => {
        this.toaat.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
      }
    );
  }
}
