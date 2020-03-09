import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ClearBasketPopupComponent } from "./clear-basket-popup.component";

describe("ClearBasketPopupComponent", () => {
  let component: ClearBasketPopupComponent;
  let fixture: ComponentFixture<ClearBasketPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearBasketPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearBasketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
