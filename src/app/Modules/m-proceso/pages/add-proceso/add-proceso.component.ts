import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MProcesoService } from "../../../../Services/m-proceso.service";

@Component({
  selector: "app-add-proceso",
  templateUrl: "./add-proceso.component.html",
  styleUrls: ["./add-proceso.component.scss"],
})
export class AddProcesoComponent implements OnInit {
  fProceso = new FormGroup({
    name: new FormControl(),
    descriptions: new FormControl(),
  });

  constructor(
    public services: MProcesoService,
    private route: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let data: Object = {
      process: {
        name: this.fProceso.value.name,
        description: this.fProceso.value.descriptions,
      },
    };
    this.services.getAddProcess(data).subscribe(
      (res) => {
        this.route.navigate(["/app/porcess/listproceso"]);
      },
      (error) => {
        this.toast.error("Operacion no completada", "Boot MVP", {
          timeOut: 1500,
        });
        this.route.navigate(["/app/porcess/listproceso"]);
      }
    );
  }
}
