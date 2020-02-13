import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.component.html",
  styleUrls: ["./addresses.component.less"]
})
export class AddressesComponent implements OnInit {
  addressesForm = new FormGroup({
    country: new FormControl("--Выберите--", [
      Validators.required,
    ])
  });
  ngOnInit(): void {
  }

}
