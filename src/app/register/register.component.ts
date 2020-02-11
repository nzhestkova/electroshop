import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
}
