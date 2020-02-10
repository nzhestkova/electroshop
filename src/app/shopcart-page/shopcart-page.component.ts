import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopcart-page",
  templateUrl: "./shopcart-page.component.html",
  styleUrls: ["./shopcart-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopcartPageComponent implements OnInit {

  ngOnInit(): void {
  }

}
