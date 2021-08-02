import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MProcesoService } from "../../../../Services/m-proceso.service";
import { MProveedorService } from "../../../../Services/m-proveedor.service";
import { MProveedorModule } from "../../../m-proveedor/m-proveedor.module";

@Component({
  selector: "app-provedro-porcesos",
  templateUrl: "./provedro-porcesos.component.html",
  styleUrls: ["./provedro-porcesos.component.scss"],
})
export class ProvedroPorcesosComponent implements OnInit {
  formProc_Provid = new FormGroup({
    select1: new FormControl(""),
    select2: new FormControl(""),
    select3: new FormControl(""),
    good: new FormControl(""),
    tons: new FormControl(""),
    year: new FormControl(""),
  });

  load: boolean;

  listaProvedore: any;
  listaProcess: any;
  TrasnMode = [
    "aereo",
    "ferrocarril",
    "automotor",
    "cabotaje",
    "fluvial",
    "tuberia",
    "multimodal",
    "directo",
    "manual",
    "interno",
  ];
  constructor(
    public servicesPro: MProveedorService,
    public servicesProce: MProcesoService,
    public Toast: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.load = true;
    this.fillprovedor();
    this.fillListProcess();
    setTimeout(() => {
      this.load = false;
    }, 800);
  }

  onSubmit() {
    let data: Object = {
      process_provider: {
        provider_id: this.formProc_Provid.controls.select1.value,
        process_id: this.formProc_Provid.controls.select2.value,
        goods_type: this.formProc_Provid.controls.good.value,
        tons_by_supplies: this.formProc_Provid.controls.tons.value,
        number_supplies_year: this.formProc_Provid.controls.year.value,
        transportation_mode: this.formProc_Provid.controls.select3.value,
      },
    };

    this.servicesProce.AddProvider_Process(data).subscribe(
      (res: any) => {
        this.Toast.success("Operacion realizada con exito", "Boot Mvp", {
          timeOut: 1200,
        });
        this.router.navigateByUrl("/app/porcess/listproceso");
      },
      (error) => {
        this.Toast.error("Operacion no realizada...", "Boot Mvp", {
          timeOut: 1200,
        });
        this.formProc_Provid.reset();
      }
    );
  }

  fillprovedor() {
    this.servicesPro.getAllProvider().subscribe(
      (res: any) => {
        this.listaProvedore = res.data;
      },
      (error) => {
        // this.router.navigateByUrl("/admin/process/listProcess");
      }
    );
  }

  fillListProcess() {
    this.servicesProce.getAllProcess().subscribe(
      (res: any) => {
        this.listaProcess = res.data;
        //console.log(this.listaProcess);
        setTimeout(() => {
          this.load = false;
        }, 800);
      },
      (error) => {
        this.Toast.error("Operacion no realizada", "Boot MVP", {
          timeOut: 1200,
        });
      }
    );
  }
}
