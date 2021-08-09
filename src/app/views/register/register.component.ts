import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthServiceService } from "../../Services/auth-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "register.component.html",
})
export class RegisterComponent implements OnInit {
  fromRegis = new FormGroup({
    email: new FormControl(""),
    pass: new FormControl("", [Validators.required, Validators.minLength(11)]),
    pass2: new FormControl(),
  });
  load: boolean;
  constructor(
    public services: AuthServiceService,
    private ruta: Router,
    public Toas: ToastrService
  ) {}

  atras() {
    history.back();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.confirmarPass();
    }, 100);
  }

  confirmarPass() {
    if (this.fromRegis.value.pass == this.fromRegis.value.pass2) return false;
    else return true;
  }

  onSubmit() {
    this.load = true;
    let data: Object = {
      user: {
        email: this.fromRegis.controls.email.value,
        password: this.fromRegis.controls.pass.value,
      },
    };

    this.services.Register_user(data).subscribe(
      (res) => {
        this.Toas.success("Registro con exito..", "Boot Mvp", {
          timeOut: 800,
        });
        setTimeout(() => {
          this.load = false;
        }, 500);
        history.back();
      },
      (error) => {
        this.Toas.error("Ha ocurrido un error..", "Boot Mvp", {
          timeOut: 900,
        });
        setTimeout(() => {
          this.load = false;
        }, 500);
      }
    );
  }
}
