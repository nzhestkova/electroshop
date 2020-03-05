import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopupCommonComponent } from "./popup-common.component";

describe("PopupCommonComponent", () => {
  let component: PopupCommonComponent;
  let fixture: ComponentFixture<PopupCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
