import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../model/product";

@Component({
  selector: "app-popup-add-purchase",
  templateUrl: "./popup-add-purchase.component.html",
  styleUrls: ["./popup-add-purchase.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupAddPurchaseComponent {
  @Input() action: string;
  @Input() product: Product;
  @Input() showCounter: boolean;

  @Output() hidePopup = new EventEmitter();
  @Output() confirmed = new EventEmitter<number>();

  productCount: number = 1;

  addConfirmed(): void {
    this.confirmed.emit(this.productCount);
  }

  cancel(): void {
    this.hidePopup.emit();
  }
}
