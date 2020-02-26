import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-purchase-add-popup",
  templateUrl: "./purchase-add-popup.component.html",
  styleUrls: ["./purchase-add-popup.component.less"]
})
export class PurchaseAddPopupComponent implements OnInit {
  count: number;
  @Input() product: Product;
  @Output() choiceMade = new EventEmitter<{ count: number, answer: boolean }>();

  chosen(answer: boolean): void {
    this.choiceMade.emit({ count: this.count, answer: answer });
  }

  ngOnInit(): void {
    this.count = 1;
  }
}
