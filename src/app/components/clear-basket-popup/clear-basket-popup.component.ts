import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-clear-basket-popup",
  templateUrl: "./clear-basket-popup.component.html",
  styleUrls: ["./clear-basket-popup.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearBasketPopupComponent {
  @Output() hidePopup = new EventEmitter();
  @Output() confirmed = new EventEmitter();

  userConfirmed(): void {
    this.confirmed.emit();
  }

  userCancelled(): void {
    this.hidePopup.emit();
  }
}
