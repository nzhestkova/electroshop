import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Product, Purchase } from "../../models/product";

@Component({
  selector: "app-popup-common",
  templateUrl: "./popup-common.component.html",
  styleUrls: ["./popup-common.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupCommonComponent {
  @Input() action: string = "Удалить";
  @Input() purchaseInfo: Purchase = new Purchase(
    new Product(123123, "product #1", 13), 3);
}
