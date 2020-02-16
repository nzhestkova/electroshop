import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { User } from "../../../models/user";
import { GetUsersService } from "../../services/get-users/get-users.service";

@Component({
  selector: "app-edit-personal-data",
  templateUrl: "./edit-personal-data.component.html",
  styleUrls: ["./edit-personal-data.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPersonalDataComponent implements OnInit {
  @Input() userInformation: User;
  @Output() userUpdated = new EventEmitter();
  serviceSubscriber: Subscription;
  userNameForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.min(2),
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.min(2),
      ]),
  });

  constructor(private usersService: GetUsersService) {
  }

  updateUserName(): void {
    if (this.userNameForm.valid) {
      const newUser = new User(
        this.userInformation.login,
        this.userInformation.password,
        `${this.userNameForm.get("name").value} ${this.userNameForm.get("surname").value}`);
      this.serviceSubscriber = this.usersService.updateUserInformation(newUser).subscribe(
        () => {this.serviceSubscriber.unsubscribe();
        });
      this.cancelUpdating();
    }
  }

  cancelUpdating(): void {
    this.userUpdated.emit();
  }

  ngOnInit(): void {
    // разделение userName и заполнение полей формы
  }

}
