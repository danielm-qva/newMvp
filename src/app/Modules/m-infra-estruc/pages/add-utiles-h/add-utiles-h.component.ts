import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MInfraestructuraService } from "../../../../Services/m-infraestructura.service";

@Component({
  selector: "app-add-utiles-h",
  templateUrl: "./add-utiles-h.component.html",
  styleUrls: ["./add-utiles-h.component.scss"],
})
export class AddUtilesHComponent implements OnInit {
  fromsUTools = new FormGroup({
    descripcion: new FormControl("", [Validators.required]),
    cantidad: new FormControl("", [Validators.required]),
    precio: new FormControl("", [Validators.required]),
    porcentageAnual: new FormControl("", [Validators.required]),
    porcetagewear: new FormControl("", [Validators.required]),
  });

  load: Boolean;

  constructor(
    public services: MInfraestructuraService,
    public toast: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let data: Object = {
      util_tool: {
        description: this.fromsUTools.controls.descripcion.value,
        quantity: this.fromsUTools.controls.cantidad.value,
        price_per_unit: {
          amount: String(this.fromsUTools.controls.precio.value),
          currency: "CUP",
        },
        dedication_percentage: String(
          this.fromsUTools.controls.porcentageAnual.value
        ),
        annual_wear_percentage: String(
          this.fromsUTools.controls.porcetagewear.value
        ),
      },
    };

    this.services.AddUtilsTools(data).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.router.navigate(["/app/infraEstruc/listGenInfraEstruc"]);
      },
      (error) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        this.router.navigate(["/app/infraEstruc/listGenInfraEstruc"]);
        setTimeout(() => {
          this.load = false;
        }, 500);
      }
    );
  }

  Atra() {
    history.back();
  }
}
