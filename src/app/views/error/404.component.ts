import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "404.component.html",
})
export class P404Component implements OnInit {
  constructor() {}

  Atras() {
    history.back();
  }

  ngOnInit(): void {}
}
