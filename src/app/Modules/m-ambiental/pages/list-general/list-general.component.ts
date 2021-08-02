import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MAmbientalService } from "../../../../Services/m-ambiental.service";

@Component({
  selector: "app-list-general",
  templateUrl: "./list-general.component.html",
  styleUrls: ["./list-general.component.scss"],
})
export class ListGeneralComponent implements OnInit {
  load: boolean;

  elemER: any;
  elemWM: any;
  elemWP: any;
  constructor(public service: MAmbientalService, public toast: ToastrService) {}

  ngOnInit(): void {
    this.load = true;
    this.fillTables();
  }

  fillTables() {
    this.service.GetallEresiduals().subscribe(
      (res: any) => {
        console.log(res.data);
        this.elemER = res.data;
      },
      (error) => {
        console.log(error);
        this.load = false;
      }
    );

    this.service.GetallWasteM().subscribe(
      (res: any) => {
        console.log(res.data);
        this.elemWM = res.data;
      },
      (error) => {
        console.log(error);
        this.load = false;
      }
    );

    this.service.GetallWProcess().subscribe(
      (res: any) => {
        console.log(res.data);
        this.elemWP = res.data;
      },
      (error) => {
        console.log(error);
        this.load = false;
      }
    );

    setTimeout(() => {
      this.load = false;
    }, 1200);
  }

  deletewProcess(id) {
    this.load = true;
    this.service.DeleteWProcess(id).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.load = true;
        this.fillTables();
      },
      (error) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        this.load = false;
      }
    );
  }

  deletewMatarials(id) {
    this.load = true;
    this.service.DeleteWasteM(id).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.load = true;
        this.fillTables();
      },
      (error) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        this.load = true;
      }
    );
  }

  deleteEResiduals(id) {
    this.load = true;
    this.service.DeleteEresiduals(id).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.load = true;
        this.fillTables();
      },
      (error) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        this.load = false;
      }
    );
  }
}
