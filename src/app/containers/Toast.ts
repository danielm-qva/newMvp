import { ToastrService } from "ngx-toastr";

export class Toat {
  constructor(public toast: ToastrService) {}

  succes() {
    return this.toast.success("Operacion realizada con exito", "Boot MVP", {
      timeOut: 1500,
    });
  }
  error() {
    return this.toast.error("Operacion Fallida...", "Boot MVP", {
      timeOut: 1500,
    });
  }
}
