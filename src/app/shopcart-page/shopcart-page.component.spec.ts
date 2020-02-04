import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShopcartPageComponent } from "./shopcart-page.component";

describe("ShopcartPageComponent", () => {
  let component: ShopcartPageComponent;
  let fixture: ComponentFixture<ShopcartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
