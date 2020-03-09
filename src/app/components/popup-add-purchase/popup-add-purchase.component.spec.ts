import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopupAddPurchaseComponent } from "./popup-add-purchase.component";

describe("PopupAddPurchaseComponent", () => {
  let component: PopupAddPurchaseComponent;
  let fixture: ComponentFixture<PopupAddPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
