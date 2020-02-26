import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseAddPopupComponent } from "./purchase-add-popup.component";

describe("PurchaseAddPopupComponent", () => {
  let component: PurchaseAddPopupComponent;
  let fixture: ComponentFixture<PurchaseAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
