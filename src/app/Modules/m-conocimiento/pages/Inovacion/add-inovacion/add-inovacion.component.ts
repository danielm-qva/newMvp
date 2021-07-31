import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MConocimientoService } from "../../../../../Services/m-conocimiento.service";

@Component({
  selector: "app-add-inovacion",
  templateUrl: "./add-inovacion.component.html",
  styleUrls: ["./add-inovacion.component.scss"],
})
export class AddInovacionComponent implements OnInit {
  load: Boolean;
  Finovacion = new FormGroup({
    name: new FormControl("", [Validators.required]),
    objective: new FormControl("", [Validators.required]),
    expected_result: new FormControl(null, [Validators.required]),
    budget: new FormControl("", [Validators.required]),
    term: new FormControl("", [Validators.required]),
    expected_annual_effect: new FormControl("", [Validators.required]),
    observation: new FormControl(""),
  });

  constructor(
    public services: MConocimientoService,
    public Toast: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.load = true;
    setTimeout(() => {
      this.load = false;
    }, 500);
  }

  onSubmit() {
    let data: Object = {
      innovation_project: {
        budget: {
          amount: this.Finovacion.controls.budget.value,
          currency: "CUP",
        },
        expected_annual_effect: {
          amount: this.Finovacion.controls.expected_annual_effect.value,
          currency: "CUP",
        },
        expected_result: this.Finovacion.controls.expected_result.value,
        name: this.Finovacion.controls.name.value,
        objective: this.Finovacion.controls.objective.value,
        observation: this.Finovacion.controls.observation.value,
        term: this.Finovacion.controls.term.value,
      },
    };

    this.services.AddInovacion(data).subscribe(
      (res) => {
        this.Toast.success("Operacion realizida con exito", "Boot MVP", {
          timeOut: 1500,
        });
        this.router.navigate(["/app/inovacion/listInovacion"]);
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
