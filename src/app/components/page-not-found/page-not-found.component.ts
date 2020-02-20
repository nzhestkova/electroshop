import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
  constructor(private activateRoute: ActivatedRoute,
              /*private router: Router*/) {
  }

  gotoHomePage(): string {
    console.log(this.activateRoute.snapshot.url);
    return "";
  }
}
