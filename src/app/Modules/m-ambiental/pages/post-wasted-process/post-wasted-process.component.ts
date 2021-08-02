import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MAmbientalService } from "../../../../Services/m-ambiental.service";

@Component({
  selector: "app-post-wasted-process",
  templateUrl: "./post-wasted-process.component.html",
  styleUrls: ["./post-wasted-process.component.scss"],
})
export class PostWastedProcessComponent implements OnInit {
  load: boolean;
  constructor(
    public service: MAmbientalService,
    public toast: ToastrService,
    public route: Router
  ) {}

  isloading: boolean = true;
  FromwMaterials = new FormGroup({
    product_name: new FormControl("", [Validators.required]),
    environmental_burden: new FormControl("", [Validators.required]),
    maximum_admitted_standard: new FormControl("", [Validators.required]),
    overload_level: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    price_recoveral_percentage: new FormControl("", [Validators.required]),
    sale_amount: new FormControl("", [Validators.required]),
    um: new FormControl("", [Validators.required]),
    waste_percentage: new FormControl("", [Validators.required]),
    waste_recovery_by_sale: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    setTimeout(() => {
      this.isloading = false;
    }, 500);
  }

  onSubmit() {
    console.log(this.FromwMaterials.value);
    let data: Object = {
      waste_process_product: {
        environmental_burden: this.FromwMaterials.value.environmental_burden,
        maximum_admitted_standard:
          this.FromwMaterials.value.maximum_admitted_standard,
        overload_level: this.FromwMaterials.value.overload_level,
        price: {
          amount: String(this.FromwMaterials.value.price),
          currency: "CUP",
        },
        price_recoveral_percentage: String(
          this.FromwMaterials.value.price_recoveral_percentage
        ),
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
    this.service.AddWProcess(data).subscribe(
      (res) => {
        this.toast.success("Operacion realizada con exito..", "Boot MVP");
        this.route.navigate(["/app/ambiental/listgeneral"]);
      },
      (error) => {
        this.toast.error(
          "No se ha podido completar la operacion..",
          "Boot MVP"
        );
        setTimeout(() => {
          this.isloading = false;
        }, 500);
      }
    );
  }
}
