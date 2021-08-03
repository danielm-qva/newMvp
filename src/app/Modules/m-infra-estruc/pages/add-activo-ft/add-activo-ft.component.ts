import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MInfraestructuraService } from "../../../../Services/m-infraestructura.service";

@Component({
  selector: "app-add-activo-ft",
  templateUrl: "./add-activo-ft.component.html",
  styleUrls: ["./add-activo-ft.component.scss"],
})
export class AddActivoFTComponent implements OnInit {
  load: boolean;

  FromAFT = new FormGroup({
    clasificacion: new FormControl("", [Validators.required]),
    porcentageDedicado: new FormControl("", [
      Validators.required,
      Validators.max(100),
    ]),
    despreciation: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    numeroInventario: new FormControl("", [Validators.required]),
    precio: new FormControl("", [Validators.required]),
    cantidad: new FormControl("", [Validators.required]),
  });
  constructor(
    public services: MInfraestructuraService,
    public route: Router,
    public toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let data: Object = {
      tangible_fixed_asset: {
        classification: this.FromAFT.controls.clasificacion.value,
        dedicated_percentage: String(
          this.FromAFT.controls.porcentageDedicado.value
        ),
        depreciation_rate: String(this.FromAFT.controls.despreciation.value),
        description: this.FromAFT.controls.description.value,
        inventory_number: String(this.FromAFT.controls.numeroInventario.value),
        purchase_price: {
          amount: String(this.FromAFT.controls.precio.value),
          currency: "CUP",
        },
        quantity: String(this.FromAFT.controls.cantidad.value),
      },
    };
    console.log(data);

    this.services.AddAFtangible(data).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        history.back();
      },
      (erro) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        setTimeout(() => {
          this.load = false;
        }, 500);
      }
    );
  }

  Atras() {
    history.back();
  }
}
