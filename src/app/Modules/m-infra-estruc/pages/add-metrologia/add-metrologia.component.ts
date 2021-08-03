import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MInfraestructuraService } from "../../../../Services/m-infraestructura.service";

@Component({
  selector: "app-add-metrologia",
  templateUrl: "./add-metrologia.component.html",
  styleUrls: ["./add-metrologia.component.scss"],
})
export class AddMetrologiaComponent implements OnInit {
  formetrologia = new FormGroup({
    puntoControl: new FormControl("", [Validators.required]),
    Vcontrolada: new FormControl("", [Validators.required]),
    instrumento: new FormControl("", [Validators.required]),
    precision: new FormControl("", [Validators.required]),
    cantidad: new FormControl("", [Validators.required]),
    Eproceso: new FormControl("", [Validators.required]),
    precio: new FormControl("", [Validators.required]),
    VidaUtil: new FormControl("", [Validators.required]),
    Frecuencia: new FormControl("", [Validators.required]),
    PrecionVerificacion: new FormControl("", [Validators.required]),
    Ejecutor: new FormControl("", [Validators.required]),
  });

  constructor(
    public service: MInfraestructuraService,
    public Toast: ToastrService,
    public route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let data: Object = {
      control_point: {
        name: this.formetrologia.controls.puntoControl.value,
        variable_to_control: this.formetrologia.controls.Vcontrolada.value,
        instrument: this.formetrologia.controls.instrumento.value,
        precision: String(this.formetrologia.controls.precision.value),
        quantity: this.formetrologia.controls.cantidad.value,
        dedicated_percentage: String(
          this.formetrologia.controls.Eproceso.value
        ),
        price_per_unit: {
          amount: String(this.formetrologia.controls.precio.value),
          currency: "CUP",
        },
        useful_life_years: this.formetrologia.controls.VidaUtil.value,
        verification_frequency_months:
          this.formetrologia.controls.Frecuencia.value,
        price_per_verification: {
          amount: String(this.formetrologia.controls.PrecionVerificacion.value),
          currency: "CUP",
        },
        executor: this.formetrologia.controls.Ejecutor.value,
      },
    };
    console.log(data);

    this.service.addMetrologia(data).subscribe(
      (res) => {
        this.Toast.success("Operacion realizada con exito..", "Boot MVP");
        history.back();
      },
      (error) => {
        this.Toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        history.back();
      }
    );
  }
  Atras() {
    history.back();
  }
}
