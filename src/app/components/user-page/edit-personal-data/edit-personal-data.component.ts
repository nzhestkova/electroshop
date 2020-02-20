import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../models/user";

@Component({
  selector: "app-edit-personal-data",
  templateUrl: "./edit-personal-data.component.html",
  styleUrls: ["./edit-personal-data.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPersonalDataComponent implements OnInit {
  @Input() userInformation: User;
  @Output() userUpdated = new EventEmitter();
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

  updateUserName(): void {
  }

  cancelUpdating(): void {
    this.userUpdated.emit();
  }

  ngOnInit(): void {
    // разделение userName и заполнение полей формы
  }

}
