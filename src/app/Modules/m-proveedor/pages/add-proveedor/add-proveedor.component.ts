import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MProveedorService } from "../../../../Services/m-proveedor.service";

@Component({
  selector: "app-add-proveedor",
  templateUrl: "./add-proveedor.component.html",
  styleUrls: ["./add-proveedor.component.scss"],
})
export class AddProveedorComponent implements OnInit {
  load: boolean = true;
  fromP = new FormGroup({
    name: new FormControl(""),
    distance: new FormControl(""),
    location: new FormControl(""),
  });

  constructor(
    public service: MProveedorService,
    public Toast: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.load = false;
    }, 500);
  }

  onSubmit() {
    let data: Object = {
      provider: {
        name: this.fromP.value.name,
        distance_km: this.fromP.value.distance,
        location: this.fromP.value.location,
      },
    };

    this.service.addPorveedor(data).subscribe(
      (res) => {
        this.Toast.success("Operacion realizida con exito", "Boot MVP", {
          timeOut: 1500,
        });
        this.router.navigate(["/app/proveedor/listproveedor"]);
      },
      (error) => {
        this.Toast.error("Operacion no completada", "Boot MVP", {
          timeOut: 1500,
        });
        // this.router.navigate(["/app/dashboard"]);
      }
    );
  }
}
