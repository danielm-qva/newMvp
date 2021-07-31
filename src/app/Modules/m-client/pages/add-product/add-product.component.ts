import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MClienteService } from "../../../../Services/m-cliente.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  products: Object = {};
  faclist: any[] = [];
  fac: any[] = [];

  fromP = new FormGroup({
    name: new FormControl(""),
    dos: new FormControl(""),
  });

  activa: boolean = true;

  fromF = new FormGroup({
    namef: new FormControl(""),
    valor: new FormControl(""),
    pon: new FormControl(""),
  });

  constructor(public service: MClienteService) {}

  onSubmit() {
    let data: Object = {
      product: {
        name: this.fromP.controls.name.value,
        factors: this.faclist,
      },
    };
    console.log(data);
    this.service.createProduct(data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.service.getAllPorducts().subscribe((res) => {
      console.log(res);
    });
  }

  submit() {
    this.faclist.push({
      name: this.fromF.controls.namef.value,
      value: this.fromF.controls.valor.value,
      weighing: this.fromF.controls.pon.value,
    });
    this.fromF.reset();
  }

  inLenghtList() {
    return this.faclist.length == 0 ? true : false;
  }
}
