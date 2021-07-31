import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MClienteService } from "../../../../Services/m-cliente.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.scss"],
})
export class ListProductComponent implements OnInit {
  load: boolean;
  elemt: Object[];
  constructor(public service: MClienteService, public Toast: ToastrService) {}

  ngOnInit(): void {
    this.load = true;
    this.getall();
  }

  getall() {
    this.service.getAllPorducts().subscribe(
      (res: any) => {
        this.elemt = res.data;
        this.Toast.success("Operacion realizada con exito", "Boot MVP", {
          timeOut: 1500,
        });
        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (error) => {
        setTimeout(() => {
          this.load = false;
        }, 500);
        console.log(error);
      }
    );
  }

  delete(id: string) {
    this.load = true;
    this.service.deleteProducto(id).subscribe(
      (res) => {
        this.getall();
      },
      (erro) => {
        this.load = false;
      }
    );
  }
}
