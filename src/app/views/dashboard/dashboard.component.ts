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

  hola() {
    this.router.navigateByUrl("/app/producto/listproduct");
  }
}
