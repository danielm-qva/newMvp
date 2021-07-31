import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface A {
  color: String;
  name: String;
}
@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  elemet: A[] = [
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
  ];
  constructor(public router: Router) {}
  ngOnInit(): void {}

  hola(event) {
    const name = event.target.name;

    if (name == "cliente") {
      this.router.navigateByUrl("/app/producto/listproduct");
      return 0;
    } else if (name == "conocimiento") {
      this.router.navigateByUrl("/app/inovacion/listInovacion");
    } else this.router.navigateByUrl("/404");
  }
}
