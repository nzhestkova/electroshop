import { Directive, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[info]"
})
export class InfoDirective implements OnInit {
  @Input() info: string;
  // constructor(private element: Element) {
  // }
  ngOnInit(): void {
  }
}
