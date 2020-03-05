import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.less"]
})
export class InfoComponent implements OnInit {
  @Input() info: string;
  ngOnInit(): void {
    this.info = `Придумайте логин, используя только латинские буквы, символы подчеркивания и цифры`;
  }
}
