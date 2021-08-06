import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../../Services/auth-service.service";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  load: boolean;
  Flogin = new FormGroup({
    user: new FormControl(),
    pass: new FormControl(),
  });

  constructor(
    public service: AuthServiceService,
    public Toast: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.Flogin.valid);
  }

  onSubmit() {
    this.load = true;
    let data: Object = {
      email: this.Flogin.value.user,
      password: this.Flogin.value.pass,
    };

    this.service.loggin(data).subscribe(
      (res: any) => {
        this.service.Autenticar(res.data.email, res.data.token);
        setTimeout(() => {
          this.load = false;
        }, 800);
        this.Toast.success(
          "Bienvenido a MVP ... Les comunicamos que aun el Proyecto se encuestra en modod Desarrollo... por lo que no cuenta con todos los modulos",
          "Joven Club",
          {
            closeButton: true,
            timeOut: 8000,
          }
        );
      },
      (erro) => {
        this.Toast.error(
          "Ha ocurrido un erro compruebe sus credendenciales",
          "",
          {
            timeOut: 800,
          }
        );
        setTimeout(() => {
          this.load = false;
        }, 600);
      }
    );
  }
}
