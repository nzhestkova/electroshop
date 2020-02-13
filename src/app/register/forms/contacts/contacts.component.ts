import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../../../model/user";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.less"]
})
export class ContactsComponent implements OnInit {
  userInfo: User;
  constructor(private router: Router) {
  }
  contactsForm = new FormGroup({
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[+]7[0-9]{10}$/),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[A-Za-z._]*[@][a-z]*[.][a-z]*$/),
    ])
  });

  nextStep(): void {
    this.router.navigate(["", "register", "addresses"]).then();
  }

  ngOnInit(): void {
  }

}
