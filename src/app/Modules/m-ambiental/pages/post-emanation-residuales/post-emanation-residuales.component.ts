import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MAmbientalService } from "../../../../Services/m-ambiental.service";

@Component({
  selector: "app-post-emanation-residuales",
  templateUrl: "./post-emanation-residuales.component.html",
  styleUrls: ["./post-emanation-residuales.component.scss"],
})
export class PostEmanationResidualesComponent implements OnInit {
  load: boolean;
  constructor(
    public service: MAmbientalService,
    public toast: ToastrService,
    public router: Router
  ) {}

  FromwMaterials = new FormGroup({
    product_name: new FormControl("", [Validators.required]),
    environmental_burden: new FormControl("", [Validators.required]),
    maximum_admitted_standard: new FormControl("", [Validators.required]),
    overload_level: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    sale_amount: new FormControl("", [Validators.required]),
    um: new FormControl("", [Validators.required]),
    waste_percentage: new FormControl("", [Validators.required]),
    waste_recovery_by_sale: new FormControl("", [Validators.required]),
  });
  ngOnInit(): void {}

  onSubmit() {
    let data: Object = {
      emanation_residual: {
        environmental_burden: this.FromwMaterials.value.environmental_burden,
        maximum_admitted_standard:
          this.FromwMaterials.value.maximum_admitted_standard,
        overload_level: this.FromwMaterials.value.overload_level,
        price: {
          amount: String(this.FromwMaterials.value.price),
          currency: "CUP",
        },
        product_name: this.FromwMaterials.value.product_name,
        sale_amount: String(this.FromwMaterials.value.sale_amount),
        um: this.FromwMaterials.value.um,
        waste_percentage: String(this.FromwMaterials.value.waste_percentage),
        waste_recovery_by_sale: String(
          this.FromwMaterials.value.waste_recovery_by_sale
        ),
      },
    };
    console.log(data);
    this.service.AddEresiduals(data).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.router.navigate(["/app/ambiental/listgeneral"]);
      },
      (error) => {
        console.log(error);
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
}
